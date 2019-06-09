<template>
  <div>
    <loader v-if="loading"></loader>
    <div class="profile">
      <div class="banner"></div>
      <div class="picture">
        <img v-bind:src="image[user.id - 1]" alt="profile picture">
      </div>
      <div class="infos">
        <div class="left">
          <h1>{{ user.name }}</h1>
          <h2>Alias "{{ user.username }}"</h2>
          <p>Email : {{ user.email }}</p>
          <p>Phone : {{ user.phone }}</p>
          <p>Website : <span class="website">{{ user.website }}</span></p>
          <p>Company : <strong>{{ user.company.name }}</strong>, <br>{{ user.company.catchPhrase }}, <br>{{ user.company.bs }}</p>
          <hr style="border-top: 1px dotted #8c8b8b;">
          <p>
            Address : {{user.address.street}}, {{user.address.city}}, {{user.address.zipcode}}
          </p>
        </div>
        <div class="right">
          <Map :user="user"></Map>
        </div>
      </div>
    </div>
    <div class="albums">
      <UserAlbums :user="user"></UserAlbums>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Utils/Loader'
import Map from '@/components/Maps/Map'
import UserAlbums from '@/components/Albums/UserAlbums'

export default {
  name: 'User',
  components: {
    Loader,
    Map,
    UserAlbums
  },
  props: {
  },
  watch: {
  },
  computed: {
  },
  replace: {
  },
  data: function () {
    return {
      user: {
        'id': null,
        'name': '',
        'username': '',
        'email': '',
        'address': {
          'street': '',
          'suite': '',
          'city': '',
          'zipcode': '',
          'geo': {
            'lat': '',
            'lng': ''
          }
        },
        'phone': '',
        'website': '',
        'company': {
          'name': '',
          'catchPhrase': '',
          'bs': ''
        }
      },
      image: [
        require('@/assets/photos/1.png'),
        require('@/assets/photos/2.png'),
        require('@/assets/photos/3.png'),
        require('@/assets/photos/4.png'),
        require('@/assets/photos/5.png'),
        require('@/assets/photos/6.png'),
        require('@/assets/photos/7.png'),
        require('@/assets/photos/8.png'),
        require('@/assets/photos/9.png'),
        require('@/assets/photos/10.png')
      ],
      loading: true,
      get: false
    }
  },
  methods: {
  },
  beforeCreate () {
  },
  created () {
  },
  compile () {
  },
  beforeMount () {
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + this.$router.history.current.params.id)
      .then(response => {
        this.user = response.data
        this.get = true
      })
  },
  beforeUpdate () {
  },
  updated () {
    if (this.get === true) {
      this.loading = false
    }
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style scoped>
* {
  z-index: 1;
}
.profile, .albums {
  border: 1px solid rgba(0,0,0,.3);
  margin: 15px 15px 0;
  width: calc(100% - 100px);
  display: inline-block;
}
.albums {
  border: none;
  margin-top: 0;
}
.banner {
  background: rgba(0,0,0,0.04);
  width: 100%;
  height: 170px;
}
.infos {
  width: calc(100% - 40px);
  padding: 0 20px 0 20px;
}
h1, h2, p {
 text-align: left;
}
h2, p {
  margin-top: 5px;
  margin-bottom: 5px;
}
h1 {
  margin-bottom: 0;
}
nav {
  z-index: 100;
}
.picture {
  width: 200px;
  height: auto;
  margin-left: 16px;
  margin-right: 16px;
  padding: 0;
  position: absolute;
  transform: translateY(-70%);
  max-width: 100%;
}
.picture img {
  max-width: 100%;
}
.left {
  width: 363px;
  float:left;
  margin-right: -185px;
  height:100%;
}
.right {
  margin-left: 370px;
  padding-bottom: 5px;
}
.infos {
  padding-top: 40px;
  position: relative;
  /*display: flex;*/
}
@media (max-width: 749px) {
  .infos,
  .left,
  .right {
    display: block;
    position: static;
  }
  .left {
    float: none;
    width: 100%;
  }
  .left * {
    text-align: center;
  }
  .right {
    margin: 0 0 5px 0;
  }
  /*.picture {*/
  /*  width: 200px;*/
  /*  height: auto;*/
  /*  margin-left: 16px;*/
  /*  margin-right: 16px;*/
  /*  padding: 0;*/
  /*  position: absolute;*/
  /*  transform: translateY(-70%);*/
  /*  max-width: 100%;*/
  /*}*/
  /*.picture img {*/
  /*  max-width: 100%;*/
  /*}*/
  .picture {
    left: 50%;
    margin: 0;
    transform: translate(-50%, -70%);
  }
  .picture img {
  }
}
.website {
  color: rgba(52, 73, 94, .8);
  text-decoration: underline;
  cursor: pointer;
}
</style>

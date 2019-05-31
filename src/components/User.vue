<template>
  <div>
    <div class="profile">
      <div class="banner"></div>
      <div class="picture">
        <img v-bind:src="image[user.id - 1]" alt="profile picture">
      </div>
      <div class="infos">
        <div class="left">
          <h1>{{ user.name }}</h1>
          <h2>Alias <q>{{ user.username }}</q></h2>
          <p>Email : {{ user.email }}</p>
          <p>Phone : {{ user.phone }}</p>
          <p>Website : <span class="website">{{ user.website }}</span></p>
          <p>Company : <strong>{{ user.company.name }}</strong>, {{ user.company.catchPhrase }}, {{ user.company.bs }}</p>
        </div>
        <div class="right">
          <div class="include-maps">
            <p>maps</p>
          </div>
        </div>
      </div>
    </div>
    <p>{{ user }}</p>
    {{ viewProfil() }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  data () {
    return {
      user: null,
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
      ]
    }
  },
  props: {
    id: {
      type: [Number, String]
    }
  },
  methods: {
    viewProfil: function () {
      console.log(this.$router.history.current.params.id)
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + this.$router.history.current.params.id)
      .then(response => (this.user = response.data))
  }
}
</script>

<style scoped>
.profile {
  border: 1px solid rgba(0,0,0,.3);
  margin: 15px;
  width: calc(100% - 100px);
  display: inline-block;
}
.banner {
  background: rgba(52, 73, 94, .3);
  width: 100%;
  height: 170px;
}
.infos {
  width: calc(100% - 40px);
  padding: 40px 20px 0 20px;
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
.picture {
  width: 200px;
  height: auto;
  margin-left: 16px;
  padding: 0;
  position: absolute;
  transform: translateY(-70%);
}
.picture img {
  max-width: 100%;
}
.left, .right {
  width: 50%;
  float: left;
}
.website {
  color: rgba(52, 73, 94, .8);
  text-decoration: underline;
  cursor: pointer;
}
.include-maps {
  margin: 5px;
}
</style>

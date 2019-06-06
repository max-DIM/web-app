<template>
  <div>
    <loader v-if="loading"></loader>
    <h1>{{ msg }}</h1>
    <div class="users">
      <div class="user"
           v-for="user in users"
           :key="user.id"
           v-if="users !== null"
      >
        <div class="background"></div>
        <div class="picture">
          <img v-bind:src="image[user.id - 1]" alt="profile picture">
        </div>
        <div class="infos">
          <p class="name">{{ user.name }}</p>
          <p class="company">company : {{ user.company.name }}</p>
        </div>
        <a v-on:click="viewProfile(user.id)">View profile</a>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Utils/Loader'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Loader
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
      msg: 'List of users of the photo application',
      users: null,
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
      loading: true
    }
  },
  methods: {
    viewProfile: function (id) {
      // console.log(id)
      this.$router.push(`user/${id}`)
    },
    stopLoader: function () {
      this.loading = false
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  compile () {
    console.log('compile')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.users = response.data))
      .then(response => this.stopLoader())
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1, h2 {
  font-weight: normal;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  background: #34495e;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  transition: 0.3s;
  cursor: pointer;
}
a:hover {
  background: rgba(52, 73, 94, .8);
}
img {
  max-width: 100%;
  height: auto;
}
.user {
  border: 1px solid rgba(0,0,0,.3);
  width: 183px;
  height: 252px;
  margin: 15px;
  display: inline-block;
}
.background {
  background: rgba(0,0,0,0.04);
  width: 100%;
  height: 62px;
}
.picture {
  border-radius: 50%;
  width: 104px;
  height: 104px;
  position: relative;
  left: 50%;
  transform: translate(-50%,-50%);
}
.infos {
  position: relative;
  top: -38px;
}
.company {
  font-size: 11px;
}
</style>

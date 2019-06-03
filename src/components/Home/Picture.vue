<template>
    <div>
      <h1>{{photo.title}}</h1>
      <div class="infos">
        <img v-bind:src="photo.url" alt="profile photo">
      </div>
      <img v-bind:src="photo.url" :alt="photo.title">
      <div class="posts">

      </div>
      {{t()}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Picture',
  data: function () {
    return {
      picture: this.$router.history.current.params.pictureid,
      photo: {},
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
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/photos/' + this.picture)
      .then(r => (this.photo = r.data))
      .then(r => console.log(r))
  },
  methods: {
    t: function () {
      console.log('load')
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
.posts, .infos {
  max-width: 600px;
  height: 16px;
  background: rgba(0,0,0,0.04);
  margin: auto;
}
.infos {
  height: calc(16px * 2 + 27.5px);
}
.posts {
  margin-top: -6px;
}
</style>

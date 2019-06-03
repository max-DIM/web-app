<template>
    <div>
      <h1>{{photo.title}}</h1>
      <div class="infos">
        <div>
          <img v-bind:src="image[userid - 1]" alt="profile photo">
        </div>
        <div>
          <p><strong>{{user.name}}</strong></p>
        </div>
      </div>
      <img v-bind:src="photo.url" :alt="photo.title">
      <div class="posts">
        <div class="comments">

          <div class="add">
            <input type="text" placeholder="add a comment...">
          </div>
        </div>
      </div>
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
      user: {},
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
      userid: this.$router.history.current.params.userid
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/photos/' + this.picture)
      .then(r => (this.photo = r.data))
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + this.userid)
      .then(r => (this.user = r.data))
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
.infos img {
  max-height: 100%;
  width: auto;
}
.infos > div {
  height: calc(100% - 10px);
  float: left;
  padding-left: 10px;
  margin: 5px;
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
  height: 40px;
}
.add {
  padding: 5px;
  height: 30px;
}
.add input {
  height: 100%;
  border: none;
  width: 100%;
  background: transparent;
}
</style>

<template>
  <div>
    <div>
      <h2>My Albums</h2>
      <ul :key="index" v-for="(album, index) in albums">
        <li v-on:click="go(album.id)">
          <h3>Album n°{{index + 1}}</h3>
          <p>{{album.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserAlbums',
  props: {
    user: Object
  },
  data: function () {
    return {
      albums: null
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/albums?userId=' + this.$router.history.current.params.id)
      .then(response => (this.albums = response.data))
  },
  methods: {
    go: function (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  overflow: auto;
  float: left;
  width: 50%;
  transition: all .3s;
}

li:hover {
  background: #eee;
  cursor: pointer;
}
h2 {
  background: #34495e;
  color: white;
}
@media (max-width: 749px) {
  li {
    width: 100%;
  }
}
</style>

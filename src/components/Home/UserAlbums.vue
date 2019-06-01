<template>
  <div>
    <div>
      <h2>My Albums</h2>
      <ul>
        <li :key="index" v-for="(album, index) in albums" v-on:click="go(album.id, index)">
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
    go: function (id, index) {
      index++
      this.$router.push(`${this.$router.history.current.params.id}/album/${index}/${id}`)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}

li {
  overflow: auto;
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

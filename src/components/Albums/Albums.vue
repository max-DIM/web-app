<template>
  <div>
    <h1>Albums List</h1>
    <div class="container-albums-user">
      <div :key="index" v-for="(album, index) in albums" v-on:click="go(album.id, index)" class="albums">
        <h3>Album n°{{index + 1}}</h3>
        <p>{{album.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Albums',
  data: function () {
    return {
      albums: null
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(response => (this.albums = response.data))
  },
  methods: {
    go: function (id, index) {
      // index++
      // this.$router.push(`${this.$router.history.current.params.id}/album/${index}/${id}/`)
    }
  }
}
</script>

<style scoped>
.container-albums-user {
  width: calc(100% - 100px);
  margin: 0 50px;
}
.albums {
  transition: all .3s;
  display: inline-block;
  width: 50%;
}
.albums:hover {
  background: rgba(0,0,0,0.1);
  cursor: pointer;
}
h2 {
  background: rgba(0,0,0,0.04);
}
@media (max-width: 749px) {
  .albums {
    width: 100%;
  }
}
</style>

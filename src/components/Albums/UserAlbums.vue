<template>
  <div>
    <div>
      <h2>My Albums</h2>
      <div class="container-albums-user">
        <div :key="index" v-for="(album, index) in albums" v-on:click="go(album.id, index)" class="albums">
          <h3>Album n°{{index + 1}}</h3>
          <p>{{album.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserAlbums',
  components: {
  },
  props: {
    user: Object
  },
  watch: {
  },
  computed: {
  },
  replace: {
  },
  data: function () {
    return {
      albums: {}
    }
  },
  methods: {
    go: function (id, index) {
      index++
      this.$router.push(`${this.$router.history.current.params.id}/album/${index}/${id}/`)
    }
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
      .get('https://jsonplaceholder.typicode.com/albums?userId=' + this.$router.history.current.params.id)
      .then(response => (this.albums = response.data))
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style scoped>
.container-albums-user {
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

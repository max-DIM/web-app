<template>
  <div>
    <loader v-if="loading"></loader>
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
import Loader from '@/components/Utils/Loader'

export default {
  name: 'Albums',
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
      albums: null,
      loading: true
    }
  },
  methods: {
    go: function (id, index) {
      index++
      this.$router.push(`/album/${index}/${id}/`)
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
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(response => (this.albums = response.data))
  },
  beforeUpdate () {
  },
  updated () {
    this.loading = false
  },
  beforeDestroy () {
    this.loading = true
  },
  destroyed () {
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

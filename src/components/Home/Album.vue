<template>
  <div>
    <h1>Album n°{{this.$router.history.current.params.index}} : {{album.title}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Album',
  data: function () {
    return {
      album: null,
      pictures: null
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/albums/' + this.$router.history.current.params.albumid)
      .then(response => (this.album = response.data))
      .then(response => console.log(response))
  }
}
</script>

<style scoped>

</style>

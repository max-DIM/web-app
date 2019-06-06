<template>
  <div>
    <loader v-if="loading"></loader>
    <h1>Album n°{{this.thisindex}} : {{album.title}}</h1>
    <div>
      <div
        :key="index"
        v-for="(picture, index) in pictures"
        class="image"
        v-on:click="showPicture(picture.id)"
      >
        <div class="title"><p>{{picture.title}}</p></div>
        <img
          :src="picture.thumbnailUrl"
          :alt="picture.title"
          :id="picture.id"
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Utils/Loader'

export default {
  name: 'Album',
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
      album: {},
      pictures: {},
      loading: true,
      title: null,
      albumid: this.$router.history.current.params.albumid,
      userid: this.$router.history.current.params.userid,
      thisindex: this.$router.history.current.params.index
    }
  },
  methods: {
    stopLoader: function () {
      this.loading = false
    },
    showPicture: function (id) {
      this.$router.push('picture/' + id)
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
      .get('https://jsonplaceholder.typicode.com/albums/' + this.albumid)
      .then(response => (this.album = response.data))
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=' + this.albumid)
      .then(r => (this.pictures = r.data))
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
    this.stopLoader()
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style scoped>
.image {
  position: relative;
  text-align: center;
  color: white;
  margin: 3px;
  width: 150px;
  height: 150px;
  display: inline-block;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  opacity: 0;
  transition: .3s all;
  width: calc(100% - 10px);
}
.title p {
  justify-content: center;
}
.image:hover .title {
  opacity: 1;
  background: rgba(0,0,0,.1);
}
.image:hover {
  cursor: pointer;
}
</style>

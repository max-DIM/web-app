<template>
  <div>
    <loader v-if="loading"></loader>
    <h1>Pictures List</h1>
    <div>
      <div
        :key="index"
        v-for="(photo, index) in photos"
        class="image"
        v-on:click="showPicture(photo.id)"
      >
        <div class="title"><p>{{photo.title}}</p></div>
        <img
          :src="photo.thumbnailUrl"
          :alt="photo.title"
          :id="photo.id"
        >
      </div>
      <div>
        <progress :max="Object.keys(obj).length" :value="end"></progress>
        <p>you saw {{end}} pictures out of {{Object.keys(obj).length}}</p>
        <button class="see-more" v-on:click="seeMore()">
          SEE MORE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Utils/Loader'
export default {
  name: 'Pictures',
  components: {
    Loader
  },
  data: function () {
    return {
      photos: {},
      start: 0,
      end: 50,
      loading: true,
      obj: {}
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(r => {
        this.photos = r.data.slice(this.start, this.end)
        this.obj = r.data
      })
      .then(r => this.stopLoader())
  },
  methods: {
    stopLoader: function () {
      this.loading = false
    },
    showPicture: function (id) {
      this.$router.push(`pictures/picture/${id}`)
    },
    seeMore: function () {
      this.loading = true
      this.start = this.end
      this.end = this.end + 50
      let page = this.obj.slice(this.start, this.end)
      for (let i = 0; i < 50; i++) {
        this.photos.push(page[i])
      }
      this.loading = false
    }
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
button.see-more {
  border: none;
  padding: 10px 30px;
  font-size: 15px;
  cursor: pointer;
  background: rgba(0,0,0,0.1);
  border-radius: 20px;
  margin: 0 20px 14px;
  transition: all .3s;
}
button.see-more:hover {
  background: rgba(0,0,0,0.2);
}
progress {
  width: 300px;
}
</style>

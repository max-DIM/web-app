<template>
  <div class="container">
    <div id="beforeMap">
      <div id="map">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Utils/Loader'
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'

export default {
  name: 'Maps',
  components: {
    Loader,
    LMap,
    LTileLayer,
    LMarker
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
      loading: true,
      users: {},
      coordinates: [],
      get: false
    }
  },
  methods: {
    averageGeo: function (coords) {
      var sommeLat = 0
      var sommeLng = 0
      for (let i = 0; i < coords.length; i++) {
        sommeLat += coords[i].latitude
        sommeLng += coords[i].longitude
      }
      let meanLat = sommeLat / coords.length
      let meanLng = sommeLng / coords.length
      let obj = {
        latitude: meanLat,
        longitude: meanLng
      }
      return obj
    },
    mouseoverMarker: function (id) {
    },
    map: function (users) {
      for (let i = 0; i < users.length; i++) {
        let obj = {
          latitude: parseFloat(users[i].address.geo.lat),
          longitude: parseFloat(users[i].address.geo.lng)
        }
        this.coordinates.push(obj)
      }
      let coords = this.averageGeo(this.coordinates)
      let center = [coords.latitude, coords.longitude]
      // eslint-disable-next-line no-undef
      let map = L.map('map').setView(center, 2)
      // eslint-disable-next-line no-undef
      L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18
        }).addTo(map)
      for (let i = 0; i < users.length; i++) {
        let markerUser = [parseFloat(users[i].address.geo.lat), parseFloat(users[i].address.geo.lng)]
        let message = users[i].name + ' is located here !<br>Click on the marker to go to the profile'
        // eslint-disable-next-line no-undef
        L.marker(markerUser).addTo(map).bindTooltip(message, { permanent: false }).on('click', () => {
          this.$router.push(`/user/${users[i].id}`)
        })
        // L.marker(markerUser).addTo(map).on('mouseover', this.mouseoverMarker(users[i].id))
      }
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
      .get('https://jsonplaceholder.typicode.com/users')
      .then(r => {
        this.users = r.data
        this.map(this.users)
        this.get = true
      })
  },
  beforeUpdate () {
  },
  updated () {
    if (this.get === true) {
      this.loading = false
    }
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style scoped>
  #beforeMap {
    max-width: 100%;
    height: calc(100vh - 66px - 66px);
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #map {
    width: 100%;
    height: 100%;
  }
  .container {
    height: calc(100vh - 66px - 66px - 20px);
  }
</style>

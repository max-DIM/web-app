<template>
  <div id="map">
    <l-map
      :zoom="zoom"
      :center="latLng(user.address.geo.lat, user.address.geo.lng)"
      style="height: 300.44px"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      ></l-tile-layer>
      <l-marker
        :lat-lng="latLng(user.address.geo.lat, user.address.geo.lng)"
      ></l-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker
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
      zoom: 1,
      // eslint-disable-next-line no-undef
      center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // eslint-disable-next-line no-undef
      marker: L.latLng(47.413220, -1.219482)
    }
  },
  methods: {
    latLng: function (lat, lng) {
      // eslint-disable-next-line no-undef
      return L.latLng(lat, lng)
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

</style>

<template>
  <div>
    <p>vue maps</p>
  </div>
</template>

<script>
import Loader from '@/components/Utils/Loader'

export default {
  name: 'Maps',
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
      loading: true
    }
  },
  methods: {
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

</style>

<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <div id="footer">
      Maxime Girard @ {{getFullYear()}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getFullYear: function () {
      let d = new Date()
      return d.getFullYear()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
* {
  z-index: 0;
}
#footer {
  margin-top: 20px;
  font-size: 12px;
  left: 0;
  right: 0;
  height: 66px;
  color: white;
  background: #34495e;
  line-height: 66px;
  z-index: 100;
}
</style>

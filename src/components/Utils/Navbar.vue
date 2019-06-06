<template>
  <header>
    <div class="hamburger" v-on:click="isActive = !isActive; test()" v-bind:class="{ active: isActive }">
      <i class="bars"></i>
    </div>
    <nav class="menu">
      <a href="">Home</a>
      <a v-on:click="go('/pictures')">Pictures</a>
      <a v-on:click="go('/albums')">Albums</a>
      <a v-on:click="go('/maps')">Maps</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
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
      isActive: false
    }
  },
  methods: {
    test: function () {
      if (this.isActive === true) {
        document.querySelector('.menu').classList.add('show')
      } else {
        document.querySelector('.menu').classList.remove('show')
      }
    },
    go: function (e) {
      this.$router.push(e)
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
* {
  z-index: 0;
}
header {
  font-size: 20px;
  left: 0;
  right: 0;
  height: 66px;
  color: white;
  background: #34495e;
  line-height: 66px;
  z-index: 100;
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
  cursor: pointer;
  background: #34495e;
  padding: 20px 15px;
}
a:hover {
  background: rgb(75,90,107);
}
.hamburger {
  display: flex;
  align-items: center;
  width: 66px;
  height: 66px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
}
.hamburger:hover {
  background: rgb(75,90,107);
  cursor: pointer;
}

.bars,
.bars:before,
.bars:after {
  z-index: 2;
  position: relative;
  width: 50px;
  height: 5px;
  margin: 0 auto;
  background: #ecf0f1;
  border-radius: 3px;
  transition: top .2s .2s, transform .2s, background .2s;
}

.bars:before,
.bars:after {
  content: "";
  display: block;
  position: absolute;
}

.bars:before {
  top: -15px;
}

.bars:after {
  top: 15px;
}

.active .bars:before,
.active .bars:after {
  transition: top .2s,
  transform .2s .2s;
  top: 0;
}

.active .bars {
  background: transparent;
}

.active .bars:before {
  transform: rotate(45deg);
}

.active .bars:after {
  transform: rotate(-45deg);
}
@media only screen and (max-width: 750px) {
  .menu a {
    display: none;
    position: absolute;
    padding: 0;
    width: 100%;
    top: 66px;
    left: 0;
    z-index: 100;
  }
  .menu.show a {
    display: block;
  }
  .menu.show a:nth-child(2) {
    top: calc(66px * 2);
    z-index: calc(100 - 2);
  }
  .menu.show a:nth-child(3) {
    top: calc(66px * 3);
    z-index: calc(100 - 3);
  }
  .menu.show a:nth-child(4) {
    top: calc(66px * 4);
    z-index: calc(100 - 4);
  }
}
@media only screen and (min-width: 750px) {
  .hamburger {
    display: none;
  }
}
</style>

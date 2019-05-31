<template>
  <header>
    <div class="hamburger" v-on:click="isActive = !isActive; test()" v-bind:class="{ active: isActive }">
      <i class="bars"></i>
    </div>
    <nav class="menu">
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    test: function () {
      console.log(this.isActive)
      if (this.isActive === true) {
        document.querySelector('.menu').classList.add('show')
      } else {
        document.querySelector('.menu').classList.remove('show')
      }
    }
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
    /*display: none;*/
    position: static;
    width: calc(100% - 30px);
    top: 66px;
    left: 0;
  }
  .menu a:nth-child(2) {

  }
  .menu a:nth-child(2) {

  }
  .menu a:nth-child(2) {

  }
}
@media only screen and (min-width: 750px) {
  .hamburger {
    display: none;
  }
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import User from '@/components/Home/User'
import Albums from '@/components/Albums/Albums'
import Pictures from '@/components/Pictures/Pictures'
import Maps from '@/components/Maps/Maps'
import Album from '@/components/Albums/Album.vue'
import Picture from '@/components/Pictures/Picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'Home -> User',
      component: User
    },
    {
      path: '/album/:index/:id',
      name: 'Home -> User -> Album & Albums -> Album',
      component: Album
    },
    {
      path: '/picture/:id',
      name: 'Home -> User -> Album -> Picture & Pictures -> Picture',
      component: Picture
    },
    {
      path: '/pictures',
      name: 'Pictures',
      component: Pictures
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import User from '@/components/Home/User'
import Albums from '@/components/Albums/Albums'
import Pictures from '@/components/Pictures/Pictures'
import Maps from '@/components/Maps/Maps'
import Album from '@/components/Home/Album'

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
      name: 'User',
      component: User
    },
    {
      path: '/user/:userid/album/:index/:albumid',
      name: 'userAlbumView',
      component: Album
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/pictures',
      name: 'Pictures',
      component: Pictures
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    }
  ]
})

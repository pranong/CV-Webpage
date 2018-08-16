import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import Curriculum from '@/components/Curriculum'
import Grade from '@/components/Grade'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Resume/',
      name: 'Resume',
      props: true,
      component: Resume
    },
    {
      path: '/Curriculum/',
      name: 'Curriculum',
      props: true,
      component: Curriculum
    },
    {
      path: '/Grade/',
      name: 'Grade',
      props: true,
      component: Grade
    },
    {
      path: '/Contact/',
      name: 'Contact',
      props: true,
      component: Contact
    }
  ]
})

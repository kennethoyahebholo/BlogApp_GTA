import { createRouter, createWebHistory } from "vue-router";

// import About from '../views/About'
// import Home from '../views/Home'
import Home from '../views/Home'
import SingleBlogPage from '../views/SingleBlogPage'
import SingleBlogPage2 from '../views/SingleBlogPage2'
import SingleBlogPage3 from '../views/SingleBlogPage3'

const routes = [
 // {
 //  path: '/about',
 //  name: 'About',
 //  component: About
 // },
 // {
 //  path: '/',
 //  name: 'Home',
 //  component: Home
 // },
 {
  path: '/',
  name: 'Home',
  component: Home
 },
 {
  path: '/singleblogpage',
  name: 'SingleBlogPage',
  component: SingleBlogPage
 },
  {
  path: '/singleblogpage2',
  name: 'SingleBlogPage2',
  component: SingleBlogPage2
 },
  {
  path: '/singleblogpage3',
  name: 'SingleBlogPage3',
  component: SingleBlogPage3
 }
]

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
})

export default router
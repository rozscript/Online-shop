import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ProductDetail from '../pages/ProductDetails.vue'
import Card from "../pages/Card.vue"
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Signup from '@/pages/Signup.vue'
import Test from '@/pages/Test.vue'

const routes = [
  { path: '/product-detail/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/card', name: 'Card', component: Card },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/', name: 'Home', component: Home },
  {path:'/test', name:"Test", component:Test}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import Product from "../views/product/ProductView.vue"
import ProductDetail from "../views/product/ProductDetail.vue"
import Contact from  '@/views/Contact.vue'
import Cart from '@/views/client/Cart.vue'
import Order from '@/views/client/Order.vue'
import Payment from '../views/client/Paymet.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/product/all',
    name: 'product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name:'order',
    component: Order
  },
  {
    path: '/payment',
    name:'payment',
    component: Payment
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

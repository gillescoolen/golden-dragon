import RegisterLayout from '@/layouts/RegisterLayout.vue';
import SiteLayout from '@/layouts/SiteLayout.vue';
import TabletLayout from '@/layouts/TabletLayout.vue';
import Login from '@/views/Auth/Login.vue';
import Overview from '@/views/Register/Overview.vue';
import Register from '@/views/Register/Register.vue';
import Sales from '@/views/Register/Sales.vue';
import Contact from '@/views/Site/Contact.vue';
import Home from '@/views/Site/Home.vue';
import Menu from '@/views/Site/Menu.vue';
import News from '@/views/Site/News.vue';
import Dish from '@/views/Tablet/Dish.vue';
import Dishes from '@/views/Tablet/Dishes.vue';
import History from '@/views/Tablet/History.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);
Vue.component('site-layout', SiteLayout);
Vue.component('tablet-layout', TabletLayout);
Vue.component('register-layout', RegisterLayout);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'register-layout' },
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'register-layout' },
    component: Register
  },
  {
    path: '/sales',
    name: 'Sales',
    meta: { layout: 'register-layout' },
    component: Sales
  },
  {
    path: '/overview',
    name: 'Overview',
    meta: { layout: 'register-layout' },
    component: Overview
  },
  {
    path: '/tablet',
    name: 'Tablet',
    meta: { layout: 'tablet-layout' },
    component: Dishes
  },
  {
    path: '/tablet/history',
    name: 'History',
    meta: { layout: 'tablet-layout' },
    component: History
  },
  {
    path: '/tablet/:id',
    name: 'Dish',
    meta: { layout: 'tablet-layout' },
    component: Dish
  },
  {
    path: '*',
    name: 'NotFound',
    component: Home,
    meta: { layout: 'site-layout' }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

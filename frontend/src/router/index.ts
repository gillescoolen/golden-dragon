import RegisterLayout from '@/layouts/RegisterLayout.vue';
import SiteLayout from '@/layouts/SiteLayout.vue';
import TabletLayout from '@/layouts/TabletLayout.vue';
import Login from '@/pages/Auth/Login.vue';
import Overview from '@/pages/Register/Overview.vue';
import Register from '@/pages/Register/Register.vue';
import Sales from '@/pages/Register/Sales.vue';
import Contact from '@/pages/Site/Contact.vue';
import Home from '@/pages/Site/Home.vue';
import Menu from '@/pages/Site/Menu.vue';
import News from '@/pages/Site/News.vue';
import Order from '@/pages/Site/Order.vue';
import Dish from '@/pages/Tablet/Dish.vue';
import Dishes from '@/pages/Tablet/Dishes.vue';
import History from '@/pages/Tablet/History.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);
Vue.component('site-layout', SiteLayout);
Vue.component('tablet-layout', TabletLayout);
Vue.component('register-layout', RegisterLayout);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'register-layout' },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'register-layout' },
    component: Register
  },
  {
    path: '/sales',
    name: 'sales',
    meta: { layout: 'register-layout' },
    component: Sales
  },
  {
    path: '/overview',
    name: 'overview',
    meta: { layout: 'register-layout' },
    component: Overview
  },
  {
    path: '/tablet',
    name: 'tablet',
    meta: { layout: 'tablet-layout' },
    component: Dishes
  },
  {
    path: '/tablet/history',
    name: 'history',
    meta: { layout: 'tablet-layout' },
    component: History
  },
  {
    path: '/tablet/:id',
    name: 'dish',
    meta: { layout: 'tablet-layout' },
    component: Dish
  },
  {
    path: '*',
    name: 'not-found',
    component: Home,
    meta: { layout: 'site-layout' }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

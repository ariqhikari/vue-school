import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Beranda',
    component: () => import( /* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/profile',
    name: 'Profil',
    component: () => import( /* webpackChunkName: "Profile" */ '../views/Profile.vue'),
  },
  {
    path: '/profile/:slug',
    name: 'ProfilTemplate',
    component: () => import( /* webpackChunkName: "Template" */ '../views/Template.vue'),
  },
  {
    path: '/profile/:slug',
    name: 'MyProfile',
    component: () => import( /* webpackChunkName: "MyProfile" */ '../views/MyProfile.vue'),
  },
  {
    path: '/jurusan/:slug',
    name: 'Jurusan',
    component: () => import( /* webpackChunkName: "Jurusan" */ '../views/Jurusan.vue'),
  },
  {
    path: '/jurusan2/:slug',
    name: 'Jurusan2',
    component: () => import( /* webpackChunkName: "Jurusan2" */ '../views/Jurusan2.vue'),
  },
  {
    path: '/berita-acara',
    name: 'BeritaAcara',
    component: () => import( /* webpackChunkName: "BeritaAcara" */ '../views/BeritaAcara.vue'),
  },
  {
    path: '/berita/:slug',
    name: 'BeritaContent',
    component: () => import( /* webpackChunkName: "BeritaContent" */ '../views/BeritaContent.vue'),
  },
  {
    path: '/acara/:slug',
    name: 'AcaraContent',
    component: () => import( /* webpackChunkName: "Acara" */ '../views/AcaraContent.vue'),
  },
  {
    path: '/ekstrakurikuler',
    name: 'Ekstrakurikuler',
    component: () => import( /* webpackChunkName: "Ekstrakurikuler" */ '../views/Ekstrakurikuler.vue'),
  },
  {
    path: '/ekstrakurikuler/:slug',
    name: 'EkstrakurikulerContent',
    component: () => import( /* webpackChunkName: "EkstrakurikulerContent" */ '../views/EkstrakurikulerContent.vue'),
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import( /* webpackChunkName: "Faq" */ '../views/Faq.vue'),
  },
  {
    path: '/page/:slug',
    name: 'Template',
    component: () => import( /* webpackChunkName: "Template" */ '../views/Template.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')  
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/daftar-ternak',
    name: 'daftar-ternak',
    component: () => import('../views/DaftarTernakView.vue')
  },
  {
    path: '/hewan-baru',
    name: 'hewan-baru',
    component: () => import('../views/HewanBaruView.vue')
  },
  {
    path: '/pengobatan',
    name: 'pengobatan',
    component: () => import('../views/PengobatanView.vue')
  },
  {
    path: '/prestasi',
    name: 'prestasi',
    component: () => import('../views/PrestasiView.vue')
  },
  {
    path: '/tanggal',
    name: 'tanggal',
    component: () => import('../views/TanggalView.vue')
  },
  {
    path: '/transaksi',
    name: 'transaksi',
    component: () => import('../views/TransaksiView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }
  next();
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue') ,
    meta:{title: 'Home'}
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta:{title: 'Login'}
  },
  {
    path: '/daftar-ternak',
    name: 'daftar-ternak',
    component: () => import('../views/DaftarTernakView.vue'),
    meta:{title: 'Daftar Ternak'}
  },
  {
    path: '/hewan-baru',
    name: 'hewan-baru',
    component: () => import('../views/HewanBaruView.vue'),
    meta:{title: 'Hewan Baru'}
  },
  {
    path: '/pengobatan',
    name: 'pengobatan',
    component: () => import('../views/PengobatanView.vue'),
    meta:{title: 'Pengobatan'}
  },
  {
    path: '/pengobatan-baru',
    name: 'pengobatan-baru',
    component: () => import('../views/PengobatanBaruView.vue'),
    meta:{title: 'Pengobatan baru'}
  },
  {
    path: '/prestasi',
    name: 'prestasi',
    component: () => import('../views/PrestasiView.vue'),
    meta:{title: 'Prestasi'}
  },
  {
    path: '/prestasi-baru',
    name: 'prestasi-baru',
    component: () => import('../views/PrestasiBaruView.vue'),
    meta:{title: 'Prestasi Baru'}
  },
  {
    path: '/tanggal',
    name: 'tanggal',
    component: () => import('../views/TanggalView.vue'),
    meta:{title: 'Tanggal'}
  },
  {
    path: '/transaksi',
    name: 'transaksi',
    component: () => import('../views/TransaksiView.vue'),
    meta:{title: 'Transaksi'}
  },
  {
    path: '/transaksi-baru',
    name: 'transaksi-baru',
    component: () => import('../views/TransaksiBaruView.vue'),
    meta:{title: 'Transaksi Baru'}
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/SettingsView.vue'),
    meta:{title: 'Setting'}
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title);
  if (to.path === '/' && auth.currentUser) {
    next('/home')
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/')
    return;
  }
  next();
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage";
import ChangeNotePage from "@/views/ChangeNotePage";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/change-note',
    name: 'ChangeNotePage',
    component: ChangeNotePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Form from '@/views/Instructor/Form.vue'
import TaskForm from '@/views/Instructor/TaskForm.vue'
import TaskPage from '@/views/Instructor/TaskPage.vue'
import Challenges from '@/views/Developer/Challenges.vue'

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },{
    path: '/landing',
    name: 'Landing',
    component: () => import('../views/login/LandingPage.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginPage.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/login/ForgetView.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/login/SignUp.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/login/ContactUs.vue')
  },
  {
    path: '/verification/:email', // Add the parameter ":email"
    name: 'verification',
    props: true,
    component: () => import('../views/login/VerificationOtp.vue'),
  },


   {
    path: '/adminhome',
    name: 'AdminHome',
    component: () => import('../views/Admin/AdminHome.vue')
  },
  {
    path: '/developerhome',
    name: 'DeveloperHome',
    component: () => import('../views/Developer/DeveloperHome.vue')
  },
  {
    path: '/companyhome',
    name: 'CompanyHome',
    component: () => import('../views/Company/CompanyHome.vue')
  },{
    path: '/instructorhome',
    name: 'InstructorHome',
    component: () => import('../views/Instructor/InstructorHome.vue')
  }, {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/tasks/:challengeId',
    name: 'tasks',
    component: TaskForm 
  }
  ,
  {
    path: '/task-page/:taskId',
    name: 'task-page',
    component: TaskPage
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
/* const role=store.getters.getAccount.role
if (role=='admin'){
  routes.push({
    path: '/',
    redirect: '/adminlanding'
  },);
}else{
  routes.push({
    path: '/',
    redirect: '/landing'
  },);
} */

export default router

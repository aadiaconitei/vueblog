import { createWebHistory, createRouter } from "vue-router";

import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import AddPost from "./components/AddPost.vue";
// import ProductList from "./components/ProductList.vue";
// import ProductCreate from "./components/ProductCreate.vue";
// import ProductEdit from "./components/ProductEdit.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/home",
    component: () => import("./components/Home")
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/add-post",
    component: AddPost,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  }


];

const router = createRouter({
    //history: createWebHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;
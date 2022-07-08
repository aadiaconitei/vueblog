<template>
  <div id="app">
   <div class="container">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">VUE Blog</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            Home
          </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
       
        <li class="nav-item">
          <router-link v-if="currentUser" to="/users" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/posts" class="nav-link">Posts</router-link>
        </li>
        
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
           
            {{ currentUser.fname }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-post" class="nav-link">
           Add post
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            LogOut
          </a>
        </li>
      </div>
    </nav>
    </div>
      <div class="container-fluid">
        <router-view :key="$route.fullPath" />
      </div>
    <Footer />
  </div>
</template>

<script>

import Footer from "./components/Footer.vue";
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles']=='ADMIN';
      }

      return false;
    },
    
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  components: {
     Footer
  },
};
</script>
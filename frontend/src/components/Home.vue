<template>
  <div class="container">
    <section id="header" class="jumbotron text-center my-4 pb-3">
      <h1 class="display-3">My blog</h1>
      <p class="lead">Blog Vue + NodeJs + MySql</p>
    </section>
    <section id="gallery">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4" v-for="item in content" :key="item">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt=""
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">
                  {{item.content}}
                </p>
                <router-link
                  class="btn btn-outline-success btn-sm"
                  :to="'/view-post/' + item.id"
                  >Read More</router-link
                >
               
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import PostService from "../services/PostService";

export default {
  name: "MyHome",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    PostService.getPublicContent().then(
      (response) => {
        this.content = response.data['data'];
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>

<style scoped>
#header {
  background: url(https://images.unsplash.com/photo-1415795854641-f4a487a0fdc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)
    center center / cover no-repeat;
}
</style>

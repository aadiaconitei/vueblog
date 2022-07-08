<template>
  <!--Main layout-->
  <main class="mt-4 mb-5">
    <div class="container">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-md-12 mb-4">
          <!--Section: Post data-mdb-->
          <section class="border-bottom mb-4">
            
              <img v-bind:src="'/img/'+ currentPost.images"
              class="img-fluid shadow-2-strong rounded-5 mb-4"
              alt=""
            />

            <div class="row align-items-center mb-4">
              <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
               
                <span> Published <u>{{ currentPost.date}}</u> in to </span>
                <a href="" class="text-dark">{{ currentPost.categoryName}}</a>
              </div>

              <div class="col-lg-6 text-center text-lg-end">
                <button
                  type="button"
                  class="btn btn-primary px-3 me-1"
                  style="background-color: #3b5998"
                >
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-primary px-3 me-1"
                  style="background-color: #55acee"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-primary px-3 me-1"
                  style="background-color: #0082ca"
                >
                  <i class="fab fa-linkedin"></i>
                </button>
                <button type="button" class="btn btn-primary px-3 me-1">
                  <i class="fas fa-comments"></i>
                </button>
              </div>
            </div>
          </section>
          <!--Section: Post data-mdb-->
                    <section>
                      <h3>
                        {{ currentPost.title}}
                      </h3>
            <p>
              {{ currentPost.content}}
            
            </p>
                    </section>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import PostService from "../services/PostService";
export default {
  name: "postDetalii",
  data() {
    return {
      currentPost: [],
      message: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    getPost(id) {
      PostService.getPostById(id)
        .then((response) => {
          this.currentPost = response.data["data"];
          console.log(response.data["data"]);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getPost(this.$route.params.id);
  },
};
</script>

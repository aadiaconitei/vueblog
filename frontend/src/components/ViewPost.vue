<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        detalii post {{ id }}
      </h3>
    </header>
  </div>
</template>
<script>
import PostService from "../services/PostService";
export default {
  name: "postDetalii",
  data() {
    return {
      currentUser: null,
      message: '',
      id: this.$route.params.id
    };
  },
  methods: {
    getPost(id) {
      PostService.get(id)
        .then(response => {
          this.currentUser = response.data['data'];
          console.log(response.data['data']);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    
    
  },
  mounted() {
    this.message = '';
    //this.getPost(this.$route.params.id);
  }
};
</script>
<template>
  <div class="col-md-12">
    <div class="card card-container">
      <Form @submit="handlePost" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="title">Titlu</label>
            <Field name="title" type="text" class="form-control" />
            <ErrorMessage name="title" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="content">Continut</label>
            <Field
              as="textarea"
              name="content"
              rows="3"
              cols="5"
              class="form-control"
            />
            <ErrorMessage name="content" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="categoryId">Categorie </label>
            <Field name="categoryId" as="select" class="form-control">
              <option
                v-for="item in categories"
                :value="item.id"
                :key="item.id"
              >
                {{ item.name }}
              </option>
            </Field>
            <ErrorMessage name="categoryId" class="error-feedback" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Adauga articol
            </button>
          </div>
        </div>
      </Form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
 
  name: "AddPost",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
   
    const schema = yup.object().shape({
      title: yup
        .string()
        .required("Titlul este obligatoriu!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      content: yup
        .string()
        .required("Continutul este obligatoriu!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      categoryId: yup.number().required("Categoria este obligatorie!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
      categories:[]
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    // if (this.loggedIn) {
    //   this.$router.push("/profile");
    // }
     PostService.getCategories().then(
        (response) => {
          this.categories = response.data['data'];
          
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
  methods: {
    handlePost(post) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      PostService.addPost(post).then(
        (response) => {
          this.content = response.data;
          this.$router.push("/admin");
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
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
</style>

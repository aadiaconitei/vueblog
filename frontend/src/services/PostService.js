import http from "../http-common";
// import authHeader from './authHeader';

class PostService {
  getPublicContent() {
    return http.get('/posts');
  }

  addPost(data) {
    return http.post(`/posts`, data);
  }
  getPostById(id){
    return http.get(`/posts/${id}`);
  }

  getCategories(){
    return http.get('/posts/categories');
  }
  get(id) {
    return http.get(`/users/${id}`);
  }
  
  update(id, data) {
    return http.put(`/users/${id}`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
}

export default new PostService();
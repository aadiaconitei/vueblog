import http from "../http-common";
// import authHeader from './authHeader';

class PostService {
  getPublicContent() {
    return http.get('/posts');
  }
<<<<<<< HEAD
  addPost(data) {
    return http.post(`/posts`, data);
  }
  
=======

  addPost(data) {
    return http.post(`/posts`, data);
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
>>>>>>> c98de516b3a35434bfdef7d0e5f8cdac59b104a6
}

export default new PostService();
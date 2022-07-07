import http from "../http-common";
// import authHeader from './authHeader';

class PostService {
  getPublicContent() {
    return http.get('/posts');
  }
  addPost(data) {
    return http.post(`/posts`, data);
  }
  
}

export default new PostService();
import http from "../http-common";
import authHeader from './authHeader';

class UserService {
  getPublicContent() {
    return http.get('/users');
  }

  

  getAdminBoard() {
    return http.get('/admin', { headers: authHeader() });
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

export default new UserService();
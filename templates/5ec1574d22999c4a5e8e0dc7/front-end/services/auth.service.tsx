import axios from "axios";

const API_URL = "{{ settings.apiURL }}/api/users/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "authenticate", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("user", JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
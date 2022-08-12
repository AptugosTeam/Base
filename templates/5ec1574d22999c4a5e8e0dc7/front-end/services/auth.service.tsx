/*
path: auth.service.tsx
completePath: front-end/services/auth.service.tsx
unique_id: dDixye51
*/
import axios from 'axios'

const API_URL = 'https://licensing2.aptugo.com:3456/v2/accounts'

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.user?.accessToken) {
          localStorage.setItem('token', response.data.user.accessToken)
          if (response.data.user.data.Email.slice(-11) === "@aptugo.com") {
            localStorage.setItem('user', JSON.stringify({...response.data.user.data, Role: "Admin"}))
          }
          else {
            localStorage.setItem('user', JSON.stringify(response.data.user.data))
          }
        }
          return response.data
      })
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  register(username, email, password) {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password,
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  recoverPassword({ email, subject, message, name }) {
    return axios
      .post(API_URL + 'recoverpassword', {
        email,
        subject,
        message,
        name,
      })
      .then((response) => {
        return response.data
      })
  }

  checkNonce(nonce, email) {
    return axios
      .post(API_URL + 'checknonce', {
        nonce,
        email,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.accessToken)
        localStorage.setItem('user', JSON.stringify(response.data.data))
        return response.data.data._id
      })
  }
}

export default new AuthService()

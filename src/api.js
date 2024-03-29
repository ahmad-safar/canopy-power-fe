import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000/"

const user = JSON.parse(localStorage.getItem('user'));
if (user.token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
}

export default axios

import axios from "axios";

const baseUrl = process.env.API_BASE_URL || 'http://localhost:5000/api'

if (typeof window !== 'undefined' && localStorage.getItem('user')) {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('user')}`
} else {
  axios.defaults.headers.common.Authorization = ''
}

export default axios.create({
  baseURL: baseUrl
})

import axios from 'axios'

const token = localStorage.getItem('token')
const axiosIntance = axios.create({
  headers: {
      authorization: token
  }
})
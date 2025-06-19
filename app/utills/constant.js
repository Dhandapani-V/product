
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('API Error:', error.response || error.message)
    return Promise.reject(error)
  }
)

export const getRequest = async (url, config = {}) => {
  const response = await api.get(url, config)
  return response.data
}

export const postRequest = async (url, data = {}, config = {}) => {
  const response = await api.post(url, data, config)
  return response.data
}

export const putRequest = async (url, data = {}, config = {}) => {
  const response = await api.put(url, data, config)
  return response.data
}

export const deleteRequest = async (url, config = {}) => {
  const response = await api.delete(url, config)
  return response.data
}

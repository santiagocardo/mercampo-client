import { API_URL } from './settings'

const getProductById = id =>
  fetch(`${API_URL}/products/${id}`)
    .then(res => res.json())

export default getProductById

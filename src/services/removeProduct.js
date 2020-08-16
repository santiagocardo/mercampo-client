import { API_URL } from './settings'

const removeProduct = id =>
  fetch(`${API_URL}/cart/${id}`, { method: 'DELETE' })

export default removeProduct

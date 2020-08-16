import { API_URL } from './settings'

const removeProduct = id =>
  fetch(`${API_URL}/cart/${id}`, {
    method: 'DELETE',
    // params: id,
    // body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

export default removeProduct

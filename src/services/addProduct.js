import { API_URL } from './settings'

const addProduct = data =>
  fetch(`${API_URL}/cart/add`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

export default addProduct

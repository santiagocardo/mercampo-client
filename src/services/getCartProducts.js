import { API_URL } from './settings'

const fromApiResponseToProducts = data => {
  if (Array.isArray(data)) {
    return data
  }
  return []
}

const getCartProducts = () => fetch(`${API_URL}/cart`)
  .then(res => res.json())
  .then(fromApiResponseToProducts)

export default getCartProducts

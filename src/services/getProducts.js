import { API_URL } from './settings'

const fromApiResponseToProducts = data => {
  if (Array.isArray(data)) {
    return data
  }
  return []
}

const getProducts = ({
  start = 0,
  limit = 11,
  keyword = ""
}) => fetch(`${API_URL}/products?category=${keyword}`)
  .then(res => res.json())
  .then(fromApiResponseToProducts)

export default getProducts

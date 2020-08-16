import { useState, useEffect, useContext } from 'react'

import getProducts from '../services/getProducts'
import ProductsContext from '../context/productsContext'

const useProducts = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    setLoading(true)
    getProducts({ keyword }).then(products => {
      setProducts(prevProducts => ({ ...prevProducts, [keyword]: products }))
      setLoading(false)
    })
  }, [keyword, setProducts])

  return { loading, products: products[keyword] }
}

export default useProducts

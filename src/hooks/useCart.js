import { useCallback, useContext } from 'react'

import addProductService from '../services/addProduct'
import removeProductService from '../services/removeProduct'
import cartContext from '../context/cartContext'

const useCart = () => {
  const { setCart } = useContext(cartContext)

  const addProduct = useCallback(({ _id, quantity }) => {
    addProductService({ id: _id, quantity })
      .catch(console.error)
  }, [])

  const removeProduct = useCallback(_id => {
    removeProductService(_id)
      .then(() => setCart(prev => prev.filter(item => item._id !== _id)))
      .catch(console.error)
  }, [setCart])

  return {
    addProduct,
    removeProduct
  }
}

export default useCart

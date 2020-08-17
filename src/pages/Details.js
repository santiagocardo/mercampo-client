import React from 'react'
import { redirectTo } from '@reach/router'

import useSingleProduct from '../hooks/useSingleProduct'
import ProductDetails from '../components/ProductDetails'
import Spinner from '../components/spinner'

const Details = ({ path, id }) => {
  const keyword = path.split('/')[1]
  const { product, isError, isLoading } = useSingleProduct({ keyword, id })

  if (isError) return redirectTo("/")

  return isLoading ? <Spinner /> : <ProductDetails {...product} />
}

export default Details

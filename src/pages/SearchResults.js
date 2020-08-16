import React from 'react'
import { redirectTo } from '@reach/router'

import Card from '../components/Card'
import Banner from '../components/Banner'
import Spinner from '../components/spinner'
import useSearchProducts from '../hooks/useSearchProducts'

const SearchResults = ({ keyword }) => {
  const { products, loading, isError } = useSearchProducts(keyword)

  if (isError) return redirectTo("/")

  return (
    <main className="px-8 lg:px-16 py-6 bg-gray-100">
      <Banner title={`Search results for ${keyword}...`} />
      {
        loading
          ? <Spinner />
          : <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {
              products.map(product => <Card key={product._id} {...product} />)
            }
          </div>
      }
    </main>
  )
}

export default SearchResults

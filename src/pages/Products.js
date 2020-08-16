import React from 'react'

import Banner from '../components/Banner'
import Spinner from '../components/spinner'
import useProducts from '../hooks/useProducts'
import Card from '../components/Card'

const Category = ({ path, title }) => {
  const keyword = path.split('/')[1]
  const { loading, products } = useProducts({ keyword })

  return (
    <main className="px-8 lg:px-16 py-6 bg-gray-100">
      <Banner title={title} />
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

export default Category

import React from 'react'
import { Router } from '@reach/router'

import { CartContextProvider } from './context/cartContext'
import { ProductsContextProvider } from './context/productsContext'
import Home from './pages/Home'
import Products from './pages/Products'
import Details from './pages/Details'
import SearchResults from './pages/SearchResults'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import categories from './constants/categories'

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Header />
        <ProductsContextProvider>
          <Router>
            <Home path="/" />
            {
              categories.map(({ name, title }) => <Products key={name} path={`/${name}`} title={title} />)
            }
            {
              categories.map(({ name }) => <Details key={name} path={`/${name}/:id`} />)
            }
            {/* <Details path="/product/:id" /> */}
            <Cart path="/cart" />
            <SearchResults path="/search/:keyword" />
          </Router>
        </ProductsContextProvider>
      </CartContextProvider>
      <Footer />
    </>
  )
}

export default App

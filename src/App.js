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
            <Products path="/fruits" title="Fruits 🥝" />
            <Products path="/vegetables" title="Vegetables 🥬" />
            <Products path="/organics" title="Organics 🥦" />
            <Details path="/fruits/:id" />
            <Details path="/vegetables/:id" />
            <Details path="/organics/:id" />
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

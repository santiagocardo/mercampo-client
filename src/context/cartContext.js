import React, { useState } from 'react'

const Context = React.createContext({})

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])

  return <Context.Provider value={{ cart, setCart }}>
    {children}
  </Context.Provider>
}

export default Context

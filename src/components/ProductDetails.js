import React from 'react'

import useProductsQuantity from '../hooks/useProductQuatity'
import useCart from '../hooks/useCart'

const ProductDetails = product => {
  const {
    _id,
    name,
    price,
    description,
    lastPrice,
    category,
    quantityType,
    defaultQuantity,
    photo
  } = product

  const { addProduct } = useCart()

  const {
    quantity,
    total,
    handleDecrease,
    handleIncrease
  } = useProductsQuantity({ price, lastPrice })

  const addToCard = () => addProduct({ _id, quantity })

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-gray-100">
      <div className="container px-5 py-8 lg:py-24 mx-auto">
        <div className="md:w-4/5 mx-auto flex flex-wrap">
          <img alt={name} loading="lazy" className="lg:w-1/2 w-full mx-auto object-cover object-center rounded border border-gray-200" src={photo} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name} X {defaultQuantity} {quantityType}</h1>

            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="custom-number-input h-10 w-32">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
                  <button
                    data-action="decrement"
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 transition ease-out duration-300 h-full w-20 rounded-l cursor-pointer"
                    onClick={handleDecrease}
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none"
                    name="custom-input-number"
                    onChange={() => ""}
                    value={quantity}
                  />
                  <button
                    data-action="increment"
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 transition ease-out duration-300 h-full w-20 rounded-r cursor-pointer"
                    onClick={handleIncrease}
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div onClick={addToCard} className="btn ml-4 text-white border-primary lg:border-2 bg-primary hover:bg-transparent hover:text-primary transition ease-out duration-500">
                Add to cart
              </div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-gray-900">${Intl.NumberFormat().format(total)}</span>
              <span className="title-font font-medium text-base text-gray-500 ml-4">{lastPrice && `Before: $${Intl.NumberFormat().format(lastPrice * quantity)}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ProductDetails)

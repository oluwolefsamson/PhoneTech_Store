import React from "react"
import './ProductList.css'

const products = [
    {
      id: 1,
      name: 'Redmi',
      href: '#',
      price: '$48',
      imageSrc: 'pro1.jpg',
      imageAlt: 'Redmi Product',
    },
    {
      id: 2,
      name: 'Nokia',
      href: '#',
      price: '$35',
      imageSrc: 'pro2.jpg',
      imageAlt: 'Nokia Product',
    },
    {
      id: 3,
      name: 'Iphone',
      href: '#',
      price: '$89',
      imageSrc: 'pro3.jpg',
      imageAlt: 'Iphone product',
    },
    {
      id: 4,
      name: 'Samsung',
      href: '#',
      price: '$35',
      imageSrc: 'pro4.jpg',
      imageAlt: 'Samsung products',
    },

    {
        id: 4,
        name: 'Samsung',
        href: '#',
        price: '$35',
        imageSrc: 'pro5.jpg',
        imageAlt: 'Samsung products',
      },

      {
        id: 4,
        name: 'Samsung',
        href: '#',
        price: '$35',
        imageSrc: 'pro6.jpg',
        imageAlt: 'Samsung products',
      },

      {
        id: 4,
        name: 'Iphone',
        href: '#',
        price: '$35',
        imageSrc: 'pro10.jpg',
        imageAlt: 'Iphone product',
      },

      {
        id: 4,
        name: 'Samsung',
        href: '#',
        price: '$35',
        imageSrc: 'pro8.jpg',
        imageAlt: 'Samsung products',
      },
    // More products...
  ]
  
  export default function ProductList() {
    return (
      <div className="productlist-con">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h1 
              // data-aos="zoom-out-left"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10">
                      Our Product Lists
              </h1>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    data-aos="zoom-out-down"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
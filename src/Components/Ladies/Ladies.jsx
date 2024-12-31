import React from 'react'

const products = [
    { id: 1, name: "Tops1", price: "$100", image: "images/tops1.jpeg" },
    { id: 2, name: "Tops2", price: "$150", image: "images/tops2.jpg" },
    { id: 3, name: "Tops3", price: "$200", image: "images/tops3.jpg" },
    { id: 4, name: "Legins", price: "$250", image: "images/bottom1.jpeg" },
    { id: 5, name: "Pant", price: "$300", image: "images/bottom2.png" },
    { id: 6, name: "Trouser", price: "$350", image: "images/bottom3.jpg" },
    
  ];

const Ladies = () => {


  return (
    <>
    <div className="bg-[#F5F5F5] px-5 py-5 transition-all duration-[.4s] dark:bg-black">

<div className="container">
    <div className="font-volkhov text-[40px] text-[#A6AEBF] flex justify-center items-center p-[10px]">
        <h2><span className="text-[#ffc107]">Women</span> Outfit...</h2>

    </div>

<div className="grid grid-cols-3 gap-6 p-6 transition-all duration-[.4s] dark:bg-black">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-md transition-all duration-[.4s] dark:bg-black">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-[#9AA6B2]">{product.name}</h3>
            <p className="text-sm text-[#BCCCDC]">{product.price}</p>
            <button className="mt-2 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>

    </div>



   </div>

    </>
  )
}

export default Ladies

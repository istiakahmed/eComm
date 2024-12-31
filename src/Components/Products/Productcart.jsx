import React from "react";

const products = [
  { id: 1, name: "shirt", price: "$100", image: "images/shirts1.png" },
  { id: 2, name: "t-shirt", price: "$150", image: "images/tshirts2.jpg" },
  { id: 3, name: "t-shirt2", price: "$200", image: "images/tshirts3.jpeg" },
  { id: 4, name: "Pant1", price: "$250", image: "images/pant1.jpg" },
  { id: 5, name: "Pant2", price: "$300", image: "images/pant2.jpg" },
  { id: 6, name: "Pant3", price: "$350", image: "images/pant3.jpg" },
  
];

const ProductCart = () => {
  return (
   <div className="transition-all duration-[.4s] dark:bg-black">

<div className="container">
    <div className="font-volkhov text-[40px] text-[#A6AEBF] flex justify-center items-center p-[10px]">
        <h2><span className="text-[#ffc107]">Menz</span> choice...</h2>

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

    
  );
};

export default ProductCart;

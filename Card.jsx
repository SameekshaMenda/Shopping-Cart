// Card.js
import React, { useState } from 'react';
import './Card.css';
import './Navbar.css';
import './SearchBar.css'
import SearchBar from './SearchBar';

const card = [
  {
    id: 1,
    image: "https://i5.walmartimages.com/asr/9f228d9e-4582-434c-9cd3-2ffaa45b4000_1.c42b0b1a13cdfe59c2ecfa4a55dec434.jpeg",
    info: "Women's Loose Wrap Long Sleeve Shirt Office Blouse Shirts Tops",
    price: 699,
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.7S4EdVtyQT1hQfu8MDa4bQHaJ3?w=186&h=248&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    info: "Women's Stylish Indian Daily Wear Tunics Kurtis",
    price: 899,
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/OIP.COsFUo_pfOAB9g9j7Lk4LwHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    info: "Women's Solid Shirts Long Sleeve Button Down Denim Shirt",
    price: 2999,
  },
];

export default function Card() {
  const [quan, setQuan] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const inc = () => {
    setQuan(quan + 1);
  };

  const dec = () => {
    if (quan >= 1) {
      setQuan(quan - 1);
    }
  };

  const fun = () => {
    alert("Added to Wishlist!");
  };

  const filteredProducts = card.filter((product) =>
    product.info.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setSearchTerm} /> 
      <div className='card-container'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='card'>
            <h2>{product.name}</h2>
            <img src={product.image} alt="pro-image" />
            <p>{product.info}</p>
            <h3>Price=₹{product.price}</h3>
            <button className='btn-card' onClick={fun}>Add to cart</button>
            <br></br>
            <button className='btn' onClick={inc}>+</button>
            <span>{quan}</span>
            <button className='btn' onClick={dec}>-</button>
          </div>
        ))}
      </div>
    </>
  );
}

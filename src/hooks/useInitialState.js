import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://platzi-store-ts-api.herokuapp.com/api/v1';

const useInitialState = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return {
    products,
    cart,
    addToCart: product => setCart([...cart, product]),
    removeFromCart: product => setCart(cart.filter(item => item.id !== product.id)),
  };
};

export default useInitialState;

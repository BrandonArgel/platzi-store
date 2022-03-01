import react from 'react';

const AppContext = react.createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default AppContext;

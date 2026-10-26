import { useState } from 'react';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';

import './App.css';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Books />
      </main>
    </CartProvider>
  );
}
export default App;
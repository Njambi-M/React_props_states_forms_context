import React, { useState } from "react";
import { CartProp } from "../../types";

const items: CartProp[] = [
  { item: 1, itemName: 'Cat Tower' },
  { item: 2, itemName: 'Adapter Extension' },
  { item: 3, itemName: 'Kettle' },
  { item: 4, itemName: 'Headphones' },
  { item: 5, itemName: 'Polaroid Camera' },
  { item: 6, itemName: 'Resistance Bands' },
  { item: 7, itemName: 'Scrabble Board' }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(items);

  // Function to handle removing the last item from the list
  const handleRemoveLastItem = () => {
    if (cartItems.length > 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.pop(); // Remove the last item from the list
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div>
      <h1 id="cart">Cart</h1>
      <ul id ="items" >
        {cartItems.map(item => (
          <li key={item.item}>{item.itemName}</li>
        ))}
      </ul>
      <button id ="btn_remove" onClick={handleRemoveLastItem}>Remove Last Item</button>
    </div>
  );
};

export default Cart;

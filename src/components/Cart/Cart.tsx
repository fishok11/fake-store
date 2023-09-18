import { useEffect, useState } from 'react';
import { cartState, getCart } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Cart = () => {
  const dispatch = useAppDispatch();
  const stateCart = useAppSelector(cartState);

  useEffect(() => {
    dispatch(getCart());
    // console.log(stateCart.products);
    
  //   const get = async() => {
  //     const response = await fetch('https://fakestoreapi.com/carts/user/1')
  
  //     const data = await response.json();
  
  //     console.log(data);
  //     setCart(data)
  //     return data;
  //   }
  //   get()
  }, [dispatch])

  return (
    <div>
      {stateCart.products.map((item) => (
        <div key={item.id}>
          <div>item.productId</div>
          <div>item.quantity</div>
        </div>
      ))}
    </div>
  )
}

export default Cart;
import React, { useEffect } from 'react';
import { useCart } from 'react-use-cart';

const Cart = ({setCartInfo}) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  useEffect(() =>{
    setCartInfo(items.length);
  },[items,setCartInfo]);

  if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>;

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className='table table-light table-hover m-0'>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} style={{ height: '6rem' }} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className='btn btn-info ms-2'
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <button
                        className='btn btn-info ms-2'
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className='btn btn-danger ms-2'
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="text-center mt-3">
            <h4>Total Price: ${cartTotal}</h4>
            <button className="btn btn-danger" onClick={emptyCart}>Empty Cart</button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;


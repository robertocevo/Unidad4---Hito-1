import { useState } from 'react';
import { pizzaCart } from '../pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const updateQuantity = (id, newCount) => {
    if (newCount < 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, count: newCount } : item
      ));
    }
  };

  const increaseQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    updateQuantity(id, item.count + 1);
  };

  const decreaseQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    updateQuantity(id, item.count - 1);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count), 0);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title mb-4">Detalles del pedido</h2>
              
              {cart.length === 0 ? (
                <p className="text-center">El carrito está vacío</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
                          className="me-3"
                        />
                        <div className="flex-grow-1">
                          <h5 className="mb-1 text-capitalize">{item.name}</h5>
                          <p className="mb-1">${formatPrice(item.price)}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <button 
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.count}</span>
                          <button 
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-4 pt-3 ">
                    <h4 className="text-end">Total: ${formatPrice(calculateTotal())}</h4>
                    <div className="d-grid mt-4">
                      <button className="btn btn-dark">Pagar</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
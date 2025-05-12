import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

const Pizza = ({ pizzaId, onBack }) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/pizzas/${pizzaId}`);
        setPizza(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  if (loading) return <div className="text-center mt-5">Cargando pizza...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <button onClick={onBack} className="btn btn-light mb-3">
        ← Volver al menú
      </button>
      
      <div className="row">
        <div className="col-md-6">
          <img 
            src={pizza.img} 
            alt={pizza.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-capitalize">{pizza.name}</h1>
          <h3 className="text-success">${pizza.price.toLocaleString('es-CL')}</h3>
          
          <div className="mb-4">
            <h4>Ingredientes:</h4>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="text-capitalize">{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <h4>Descripción:</h4>
            <p>{pizza.desc}</p>
          </div>
          
          <button className="btn btn-dark btn-lg">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
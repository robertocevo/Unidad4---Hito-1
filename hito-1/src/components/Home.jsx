import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import CardPizza from './CardPizza';
import Header from './Header';

const Home = ({ onPizzaSelected }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/pizzas`);
        setPizzas(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) return <div className="text-center mt-5">Cargando pizzas...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <main className="container">
      <Header />
    <div className="container">
      <h2 className="text-center mb-4">🍕 Nuestro Menú</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza 
            key={pizza.id} 
            pizza={pizza}
            onViewMore={() => onPizzaSelected(pizza.id)}
          />
        ))}
      </div>
    </div>
    </main>
  );
};

export default Home;
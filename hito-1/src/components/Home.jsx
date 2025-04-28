
import { pizzas } from '../pizzas';
import CardPizza from './CardPizza';
import Header from './Header';

const Home = () => {
  return (
    <main className="container">
      <Header />
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            description={pizza.desc}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
const CardPizza = ({ pizza, onViewMore }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img 
          src={pizza.img} 
          className="card-img-top" 
          alt={pizza.name}
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{pizza.name}</h5>
          <p className="text-success">${pizza.price.toLocaleString('es-CL')}</p>
          <div>
            <strong>Ingredientes:</strong>
            <ul className="mt-2">
              {pizza.ingredients.map((ing, i) => (
                <li key={i} className="text-capitalize">{ing}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-footer bg-white">
          <button 
            onClick={onViewMore}
            className="btn btn-dark w-100"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
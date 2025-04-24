const CardPizza = ({ name, price, ingredients, img }) => {
    const formatearPrecio = (precio) => {
      return precio.toLocaleString('es-CL');
    };
  
    return (
      <div className="col-md-4 mb-4 mt-4">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <strong>Ingredientes:</strong>
              <ul className="list-unstyled">
                {ingredients.map((ingrediente, index) => (
                  <li key={index}>- {ingrediente}</li>
                ))}
              </ul>
            </p>
          </div>
          <div className="card-footer bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5">${formatearPrecio(price)}</span>
              <div>
                <button className="btn btn-outline-dark btn-sm me-2">Ver más</button>
                <button className="btn btn-dark btn-sm">Añadir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardPizza;

  const CardPizza = ({ name, price, ingredients, img, description }) => {
    const formatPrice = (price) => {
      return price.toLocaleString('es-CL');
    };
  
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title text-capitalize">{name}</h5>
            <p className="card-text">{description}</p>
            <div>
              <strong>Ingredientes:</strong>
              <ul className="mt-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="text-capitalize">{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-footer bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5">${formatPrice(price)}</span>
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
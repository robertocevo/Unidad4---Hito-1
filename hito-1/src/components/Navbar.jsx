const Navbar = () => {
    const total = 25000;
    const token = false;
    
    const formatearPrecio = (precio) => {
      return precio.toLocaleString('es-CL');
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a class="navbar-brand" href="#">Pizzería Mamma Mia</a>
          <button className="btn btn-outline-light me-2">🍕 Home</button>
          <div className="ms-auto d-flex">
            {token ? (
              <>
                <button className="btn btn-outline-light me-2">🔓 Perfil</button>
                <button className="btn btn-outline-light me-2">🔒 Cerrar sesión</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light me-2">🔐 Iniciar sesión</button>
                <button className="btn btn-outline-light me-2">🔐 Registrarse</button>
              </>
            )}
            <button className="btn btn-outline-light">🛒 Total: ${formatearPrecio(total)}</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;

import headerBg from '../assets/Header.jpg';

const Header = () => {
  return (
    <header 
      className="bg-dark text-white text-center py-5 mb-4"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        <h1 className=" fw-bold mb-3">¡Pizzería Mamma Mia!</h1>
        <p className="">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
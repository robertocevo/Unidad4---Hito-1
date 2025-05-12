import { useState } from 'react';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPizzaId, setSelectedPizzaId] = useState(null);

  return (
    <div className="app">
      <Navbar onHomeClick={() => setCurrentView('home')} />
      
      <main className="container mt-4">
        {currentView === 'home' ? (
          <Home onPizzaSelected={(id) => {
            setSelectedPizzaId(id);
            setCurrentView('pizza');
          }} />
        ) : (
          <Pizza pizzaId={selectedPizzaId} onBack={() => setCurrentView('home')} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import Home from './pages/home';
import Header from './components/header';
import Destino from './pages/destino';
import Tripulacao from './pages/tripulacao';
import Tecnologia from './pages/tecnologia';
import PreRenderFirstImage from './pages/tripulacao/pre-render';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const getCSSClass = () => {
    switch (currentPage) {
      case 'Home':
        return 'bg-image-home';
      case 'Destino':
        return 'bg-image-destino';
      case 'Tripulação':
        return 'bg-image-tripulacao';
      case 'Tecnologia':
        return 'bg-image-tecnologia';
      default:
        return 'bg-image-home';
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home handlePageChange={handlePageChange} />;
      case 'Destino':
        return <Destino />;
      case 'Tripulação':
        return <Tripulacao />;
      case 'Tecnologia':
        return <Tecnologia />;
    }
  };

  return (
    <div className={`App ${getCSSClass()}`}>
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <PreRenderFirstImage />
      {renderPage()}
      <div
        className="hidden"
        style={{ backgroundImage: "url('/images/bg-img-destino.jpg')" }}
      />
      <div
        className="hidden"
        style={{ backgroundImage: "url('/images/bg-img-destino-mobile.jpg')" }}
      />
      <div
        className="hidden"
        style={{ backgroundImage: "url('/images/bg-img-tripulacao.jpg')" }}
      />
      <div
        className="hidden"
        style={{ backgroundImage: "url('/images/bg-img-tripulacao-mobile.jpg')" }}
      />
      <div
        className="hidden"
        style={{ backgroundImage: "url('/images/bg-img-tecnologia.jpg')" }}
      />
    </div>
  );
};

export default App;

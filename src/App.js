import React, { useState } from 'react';
import Home from './pages/home';
import Header from './components/header';
import Destino from './pages/destino';
// import Tripulacao from './pages/Tripulacao';
// import Tecnologia from './pages/Tecnologia';

const App = () => {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const getCSSClass = () => {
    switch (currentPage) {
      case 'Home':
        return 'bg-image-home';
      case 'Destino':
        return 'bg-image-destino';
      // case 'Tripulacao':
      //   return 'bg-image-tripulacao';
      // case 'Tecnologia':
      //   return 'bg-image-tecnologia';
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
      // case 'Tripulacao':
      //   return <Tripulacao />;
      // case 'Tecnologia':
      //   return <Tecnologia />;
      default:
        return <Home handlePageChange={handlePageChange} />;
    }
  };

  return (
    <div className={`App ${getCSSClass()}`}>
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default App;

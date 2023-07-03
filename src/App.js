import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import Header from './components/header';
import Destino from './pages/destino';
import Tripulacao from './pages/tripulacao';
import PreRenderFirstImage from './pages/tripulacao/pre-render';
import PreRenderBackgroundImages from './pages/home/pre-render-bg';
// import Tripulacao from './pages/Tripulacao';
// import Tecnologia from './pages/Tecnologia';

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
      // case 'Tecnologia':
      //   return <Tecnologia />;
    }
  };

  return (
    <div className={`App ${getCSSClass()}`}>
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <PreRenderFirstImage />
      {renderPage()}
      <PreRenderBackgroundImages />
    </div>
  );
};

export default App;

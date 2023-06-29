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
    console.log(page)
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Destino':
        return <Destino />;
      // case 'Tripulacao':
      //   return <Tripulacao />;
      // case 'Tecnologia':
      //   return <Tecnologia />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header onPageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default App;

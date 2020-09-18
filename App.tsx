import React from 'react';
import Router from './src/screens/router';
import { ComunicationProvider } from './src/contexts/comunication';
import { DataContextProvider } from './src/contexts/dataContext';

const App = () => {
  return (
    <ComunicationProvider>
      <DataContextProvider>
        <Router />
      </DataContextProvider>
    </ComunicationProvider>
  );
};

export default App;

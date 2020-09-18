import React from 'react';
import Router from './src/screens/router';
import { ComunicationProvider } from './src/contexts/comunication';

const App = () => {
  return (
    <ComunicationProvider>
      <Router />
    </ComunicationProvider>
  );
};

export default App;

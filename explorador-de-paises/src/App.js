import React, { useEffect } from 'react';
import { fetchCountries } from './services/api';

function App() {
  useEffect( () => {
    fetchCountries();
  }, []);

  return <div>Explorador de Países</div>
};

export default App;
import React, { useEffect } from 'react';
import SearchForm from './components/SearchForm';
import { fetchCountries } from './services/api';

function App() {
  const handleSearch = (searchParams) => {
    const { countryName, region, language } = searchParams;
  
    fetchCountries({ countryName, region, language })
      .then( (data) => {
        console.log("Resultados da Busca:", data);
      })
      .catch( (error) => {
        console.log("Erro ao buscar paises", error);
      });
  };

  return(
    <div>
      <h1>Explorador de países</h1>
      <SearchForm onSearch={handleSearch}/>
    </div>
  );
};

export default App;
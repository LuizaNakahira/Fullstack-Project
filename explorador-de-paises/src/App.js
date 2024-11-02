import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import { fetchCountries } from './services/api';

function App() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (searchParams) => {
    const { countryName } = searchParams;
    
    if (!countryName) {
      setErrorMessage('Nenhum país encontrado. Preencha o nome do país e clique em buscar.');
      return;
    } 

    fetchCountries({ countryName })
    .then((data) => {
      if (data.length === 0) {
        setErrorMessage('Nenhum país encontrado com esse nome.');
        setCountries([]);
      } else {
        setCountries(data);
        setErrorMessage('');
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Nenhum país encontrado com esse nome.');
        setCountries([]);
      } else {
        console.log("Erro ao buscar países", error);
      }
    });
  };

  const handleShowAll = () => {
    fetchCountries({})
      .then((data) => {
        setCountries(data);
        setErrorMessage('');
      })
      .catch((error) => {
        console.log("Erro ao buscar todos os países", error);
      });
  };

  return (
    <div>
    <h1>Countries Explore</h1>
    <SearchForm onSearch={handleSearch} onShowAll={handleShowAll} />
    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          <h3>{country.name.common}</h3>
          <img src={country.flags.svg} alt={`Bandeira de ${country.name.common}`} style={{ width: '100px' }} />
          <p>Region: {country.region}</p>
          <p>
            Language:{' '}
            {country.languages
              ? Object.values(country.languages).join(', ')
              : 'Informação indisponível'}
          </p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default App;

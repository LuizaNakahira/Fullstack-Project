import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import CountryCard from './components/CountryCard';

import {Box, Typography} from '@mui/material';
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
    <div className='app-backgorund'>
      <Box sx={{ textAlign: 'center', p:3}}>
      <Typography variant='h2' gutterBottom className='MuiTypography-root title'>Countries Explorer</Typography>
      <SearchForm 
        onSearch={handleSearch}
        onShowAll={handleShowAll}
      />
      {errorMessage && <Typography color='error'>{errorMessage}</Typography>}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3}}>
        {countries.map((country) => (
          <CountryCard key={country.name.commom} country={country}/>
        ))}
      </Box>
    </Box>
    </div>
  );
}

export default App;

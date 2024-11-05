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
      setErrorMessage('No country found. Fill the country name and click for search.');
      return;
    } 

    fetchCountries({ countryName })
    .then((data) => {
      if (data.length === 0) {
        setErrorMessage('No country with that name was found.');
        setCountries([]);
      } else {
        setCountries(data);
        setErrorMessage('');
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Try again later.');
        setCountries([]);
      } else {
        console.log("Error when searching for countries", error);
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
        console.log("Error when searching for countries", error);
      });
  };

  return (
    <div className='app-backgorund'>
      <Box sx={{  textAlign: 'center', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant='h2' gutterBottom className='MuiTypography-root title'>Countries Explorer</Typography>
      <SearchForm 
        onSearch={handleSearch}
        onShowAll={handleShowAll}
      />
      {errorMessage && <Typography color='error'>{errorMessage}</Typography>}
      <Box sx={{  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 3}}>
        {countries.map((country) => (
          <CountryCard key={country.name.commom} country={country}/>
        ))}
      </Box>
    </Box>
    </div>
  );
}

export default App;

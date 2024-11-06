import React, { useMemo, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import CountryCard from './components/CountryCard';

import {Box, CircularProgress, Typography} from '@mui/material';
import { fetchCountries } from './services/api';


function App() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const memorizedCountries = useMemo(() => countries, [countries]);

  const handleSearch = (searchParams) => {    
    const { countryName } = searchParams;
    
    if (!countryName) {
      setErrorMessage('No country found. Fill the country name and click for search.');
      return;
    } 

    setIsLoading(true);
    const delay = 7000;
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
      setErrorMessage('An error occurred. Please try again later.');
      setCountries([]);
      console.log("Error when searching for countries", error);
    })
    .finally(() => setIsLoading(false), delay)
  };

  const handleShowAll = () => {
    setIsLoading(true);
    const delay = 7000;
    fetchCountries({})
      .then((data) => {
        setCountries(data);
        setErrorMessage('');
      })
      .catch((error) => {
        console.log("Error when searching for countries", error);
      })
      .finally(() => setIsLoading(false), delay);
  };

  return (
    <div className='app-background'>
      <Box sx={{  textAlign: 'center', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h2' gutterBottom className='MuiTypography-root title'>Countries Explorer</Typography>
        <SearchForm 
          onSearch={handleSearch}
          onShowAll={handleShowAll}
        />
        {errorMessage && (
          <Box sx={{ mt: 2, color: 'error.main', fontWeight: 'bold', border: '1px solid red', padding: 2, borderRadius: 1 }}>
            <Typography color="error">{errorMessage}</Typography>
          </Box>
        )}
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}> 
            <CircularProgress size={100} thickness={8} sx={{ color: '#4682B4'}}/>
          </Box>
        ) : (
          <Box sx={{  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 3}}>
            {memorizedCountries.map((country) => (
            <CountryCard key={country.name.commom} country={country}/>
            ))}
          </Box>
      )}      
    </Box>
    </div>
  );
}

export default App;

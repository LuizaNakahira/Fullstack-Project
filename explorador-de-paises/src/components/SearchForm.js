import React, { useContext, useEffect, useRef, useState } from 'react';
import SearchButton from './SearchButton';
import ButtonShowAll from './ButtonShowAll';
import { TextField, Box } from '@mui/material';
import { CountriesContext } from '../context/CountriesContext';

function SearchForm() {
  const { handleSearch, handleShowAll } = useContext(CountriesContext); // Obtém as funções do contexto
  const [countryName, setCountryName] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch({ countryName }); // Chama a função do contexto ao invés da prop
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="ContainerForm"
      sx={{ gap: 2 }}
    >
      <TextField
        inputRef={inputRef}
        label="Country Name"
        variant="outlined"
        value={countryName}
        onChange={(event) => setCountryName(event.target.value)}
        className="searchForm"
        fullWidth
        sx={{
          '& .MuiInputLabel-root': {
            color: '#4682B4',
          },
          ':-khtml-any-link': {
            color: '#ffffff',
          },
          '& .MuiInputBase-input': {
            color: '#ffffff',
          },
        }}
      />
      <SearchButton />
      <ButtonShowAll onShowAll={handleShowAll} />
    </Box>
  );
}

export default SearchForm;

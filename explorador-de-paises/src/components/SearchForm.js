import React, {useState} from 'react';
import SearchButton from './SearchButton';
import ButtonShowAll from './ButtonShowAll';
import { TextField, Box } from '@mui/material';

function SearchForm({ onSearch, onShowAll }) {
    const [countryName, setCountryName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ countryName });
    };

    return(
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2}}
        >
            <TextField 
                label='Nome do país'
                variant='outlined'
                value={countryName}
                onChange={(event) => setCountryName(event.target.value)}
            />
            <SearchButton />
            <ButtonShowAll onShowAll={onShowAll}/>
        </Box>           
    );
};
export default SearchForm;
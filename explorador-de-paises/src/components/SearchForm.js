import React, {useEffect, useRef, useState} from 'react';
import SearchButton from './SearchButton';
import ButtonShowAll from './ButtonShowAll';
import { TextField, Box } from '@mui/material';

function SearchForm({ onSearch, onShowAll }) {
    const [countryName, setCountryName] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ countryName });
    };

    return(
        <Box
            component="form"
            onSubmit={handleSubmit}
            className='ContainerForm'
            sx={{ gap: 2}}
        >
            <TextField 
                inputRef={inputRef}
                label='Country Name'
                variant='outlined'
                value={countryName}
                onChange={(event) => setCountryName(event.target.value)}
                className='searchForm'
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
            <ButtonShowAll onShowAll={onShowAll}/>
        </Box>           
    );
};
export default SearchForm;
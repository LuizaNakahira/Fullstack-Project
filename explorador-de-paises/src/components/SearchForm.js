import React, { useState } from 'react';

function SearchForm( {onSearch} ){
    const [countryName, setCountryName] = useState('');
    const [region, setRegion] = useState('');
    const [language, setLanguage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ countryName, region, language });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nome do país:
                <input
                    type='text'
                    value={countryName}
                    onChange={(event) => setCountryName(event.target.value)}
                />
            </label>
            <br></br>
            <label>
                Região:
                <input
                    type='text'
                    value={region}
                    onChange={(event) => setRegion(event.target.value)}
                />
            </label>
            <br></br>
            <label>
                Idioma:
                <input
                    type='text'
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                />
            </label>
            <br></br>
            <button type='submit'>Buscar</button>
        </form>
    );
};

export default SearchForm;
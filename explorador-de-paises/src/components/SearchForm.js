import React, {useState} from 'react';
import SearchButton from './SearchButton';
import ButtonShowAll from './ButtonShowAll';

function SearchForm({ onSearch, onShowAll }) {
    const [countryName, setCountryName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ countryName });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Country name:
                <input
                    type='text'
                    value={countryName}
                    onChange={(event) => setCountryName(event.target.value)}
                />
            </label>
            <SearchButton />
            <ButtonShowAll onShowAll={onShowAll} />
        </form>
    );
};
export default SearchForm;
import axios from 'axios';

export const fetchCountries = async ({ countryName }) => {
    try{
        let url = 'https://restcountries.com/v3.1/all';

        if(countryName){
            url = `https://restcountries.com/v3.1/name/${countryName}`;
        }

        const response = await axios.get(url);
        return response.data;

    } catch (error) {
        console.log('Erro ao buscar países:', error);
        throw error;
    };
};
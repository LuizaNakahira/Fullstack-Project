import axios from 'axios';

export const fetchCountries = async ({ countryName, region, language }) => {
    try{
        let url = 'https://restcountries.com/v3.1/all';

        if(countryName){
            url = `https://restcountries.com/v3.1/name/${countryName}`;
        } else if(region){
            url = `https://restcountries.com/v3.1/region/${region}`;
        } else if(language){
            url = `https://restcountries.com/v3.1/language/${language}`;
        }
        const response = await axios.get(url);
        return response.data;

    } catch (error) {
        console.log('Erro ao buscar países:', error);
        throw error;
    };
};
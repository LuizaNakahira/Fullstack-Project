import axios from 'axios';

export const fetchCountries = async () => {
    try{
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Erro ao buscar países:', error);
        return [];
    };
};
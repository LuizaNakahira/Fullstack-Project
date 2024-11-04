import React from "react";
import{Card, CardContent, CardMedia, Typography} from '@mui/material';

function CountryCard({ country }){
    return(
        <Card sx={{ maxWidth: 345, m: 2, backgroundColor: '#4682B4' }}>
            <CardMedia 
                component='img'
                height='140'
                image={country.flags.svg}
                alt={`Bandeira do ${country.name.common}`}
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component='div' color="rgb(5, 34, 10)">
                    {country.name.common}
                </Typography>
                <Typography  color="rgb(5, 34, 10)">
                    Região: {country.region}
                </Typography>
                <Typography color="rgb(5, 34, 10)">
                    Idioma: {country.languages
                        ? Object.values(country.languages).join(',')
                        : 'Informação indispinível no momento'}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default CountryCard;
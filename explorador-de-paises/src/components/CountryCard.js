import React from "react";
import{Card, CardContent, CardMedia, Typography} from '@mui/material';

function CountryCard({ country }){
    return(
        <Card sx={{ maxWidth: 345, m:2 }}>
            <CardMedia 
                component='img'
                height='140'
                image={country.flags.svg}
                alt={`Bandeira do ${country.name.common}`}
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component='div'>
                    {country.name.common}
                </Typography>
                <Typography>
                    Região: {country.region}
                </Typography>
                <Typography>
                    Idioma: {country.languages
                        ? Object.values(country.languages).join(',')
                        : 'Informação indispinível no momento'}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default CountryCard;
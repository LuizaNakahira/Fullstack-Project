import React from "react";
import { Button } from '@mui/material';


function ButtonShowAll({ onShowAll }){
    return(
        <Button onClick={onShowAll} variant="contained">
            SHOW ALL
        </Button>
    );
}

export default ButtonShowAll;
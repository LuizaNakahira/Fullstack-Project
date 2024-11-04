import React from "react";
import { Button } from '@mui/material';


function ButtonShowAll({ onShowAll }){
    return(
        <Button onClick={onShowAll} variant="contained" className="MuiButton-root buttonShowAll">
            SHOW ALL
        </Button>
    );
}

export default ButtonShowAll;
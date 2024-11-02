import React from "react";

function ButtonShowAll({ onShowAll }){
    return(
        <button type="button" onClick={onShowAll}>
            SHOW ALL
        </button>
    );
}

export default ButtonShowAll;
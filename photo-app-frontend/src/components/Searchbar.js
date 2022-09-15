import React from "react";


const Searchbar = ({placeHolderSearch, data}) => {
return (
    <div className="search">
    <div className="searchInput">
        <input type="text" placeholder={placeHolderSearch}/>
    </div>
    <div className="dataResult"></div>
    </div>
)
}

export default Searchbar;
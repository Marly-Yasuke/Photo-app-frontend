import React from "react";
import SearchIcon from "@material-ui/icons/Search";


const Searchbar = ({placeHolderSearch, data}) => {
return (
    <div className="search">
    <div className="searchInput">
        <input type="text" placeholder={placeHolderSearch}/>
        <div className="searchIcon">
            <SearchIcon/>
        </div>
    </div>
    <div className="dataResult">
        {data.map((value, key) => {
            return (
                //                {/* value.title = the value parameter and the value wanted */}

                <a className="dataItem" href={"value.link"}>
            <p>{value.title}</p>
            </a>
        )})}
    </div>
    </div>
)
}

export default Searchbar;
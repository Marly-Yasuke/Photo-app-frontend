import React, {useState} from "react";
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
// import BookData from '../Data.json'

function Searchbar ({placeHolderSearch, data}) {
    const [filterData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) =>{
      const searchWord =  event.target.value
      setWordEntered(searchWord)
    //   filtering logic of the searchbar
    console.log(data)
      const newFilter = data.filter((value) =>{
        return value.title.toLowerCase.includes(searchWord.toLowerCase);
      });
      if (searchWord === ""){
        setFilteredData([])
      }else {
        setFilteredData(newFilter);
  
    }
    }
    const clearInput = ()=>{
        setFilteredData([]);
    }
return (
    <div className="search">
    <div className="searchInput">
        <input type="text" placeholder={placeHolderSearch} value={wordEntered} onChange={handleFilter}/>
        <div className="searchIcon">
        {/* SearchIcon onClick function to define */}
        {filterData.length === 0 ? (<SearchIcon/>) : (<CloseIcon id="clearBtn" onClick={clearInput}/>)}
           
        </div>
    </div>
    {filterData.length !== 0}
    <div className="dataResult">
      {filterData.slice(0, 4).map((value, key) => {
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
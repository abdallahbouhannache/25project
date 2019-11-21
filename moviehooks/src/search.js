import React, { useState } from 'react';
import './css/search.css'
// http://www.omdbapi.com/?i=tt3896198&apikey=d3e6d9ee
import searchicon from './srhicon.svg'


function Search(props) {

    const [searchV, searchRefresh] = useState("");

    const handleChanges = (e) => {
        searchRefresh(e.target.value);
        // i may add a feature here for highlighting the searched movies.


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(searchV);
        resetValue();

    }
    const resetValue = () => {
        searchRefresh("");
    }


    return (
        <form action="#" className="searchwrpper">

            <input
                value={searchV}
                onChange={handleChanges}
                type="text"
                className="searchmovie form-control"
                placeholder="search" />



            <input
                onClick={handleSubmit}
                type="submit"
                className="btn btn-outline-primary srchbtn"
                value="search" >
            </input>

            {/* <img src={searchicon} alt="" /> */}



        </form>
    );

}


export default Search;
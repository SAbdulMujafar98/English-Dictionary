import React from 'react'
import { useState } from 'react'
import axios from "axios"
import './Dictionary.css'
import ListDetails from './ListDetails.js'

const Dictionary = () => {

    const [keyWord , setKeyWord] = useState(" ");
    const [result, setResults] = useState(null);

    const api ="https://api.dictionaryapi.dev/api/v2/entries/en";

    async function handleSearch() {
        try{
            const res = await axios.get(`${api}/${keyWord}`);
            console.log(res, "res");
            setResults(res.data[0])

        }catch(e) {
            console.log({e});    
        }
    }

    function handleClear(){
        setKeyWord("")
        setResults(null)
    }

  return (

    <div className='dictionary' >
        <input onChange={(e) => setKeyWord(e.target.value)}/>
        <button className="button" type='submit' 
        onClick={handleSearch}>
            Search
        </button>
        <button 
        disabled = {!result}
        className="button" 
        type='submit' 
        onClick={{handleClear}}>
            Clear
        </button>

        {result && <ListDetails {...{result}} />}
    </div>
  )
}

export default Dictionary
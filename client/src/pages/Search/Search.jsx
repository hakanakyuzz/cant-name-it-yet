import './Search.css'
import {useState} from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="search-container">
            <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {searchTerm && (
                <button className='clear-term' onClick={()=>setSearchTerm('')}>
                    &times;
                </button>
            )}
        </div>
    )
}

export default Search
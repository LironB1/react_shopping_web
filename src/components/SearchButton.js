
// import React, { useState } from 'react';
// import axios from 'axios';

// function SearchButton({Search}) {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);


//   return (
//     <div>
//       <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
//       <button onClick={Search}>Search</button>
//       {results.map(result => (
//         <div key={result.id}>{result.name}</div>
//       ))}
//     </div>
//   );
// }
// export default SearchButton
import React, { useState } from 'react';
import axios from 'axios';
import Search from "./Search"
import { useNavigate } from "react-router-dom";



function SearchButton({addToCart}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    let navigate = useNavigate();
    
      
      
    
    const handleSearch = () => {
        axios.get(`http://localhost:8000/search/?q=${query}`).then(response => {
            setResults(response.data);
            navigate('/search');

        });
    }

    return (
        <div>

            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            <button className='"d-flex"' onClick={handleSearch}>search</button>
            {results.map(result => <Search key={result.id} result={result} addToCart={addToCart}/>
            
              
        )}
        </div>
    );
}

export default SearchButton;

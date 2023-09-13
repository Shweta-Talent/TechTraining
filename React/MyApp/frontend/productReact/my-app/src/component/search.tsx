import React, { useState, useEffect } from 'react';
import axios from 'axios';
;

function SearchTalent (){
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
       
        const handleSearch = async () => {
          try {
          
            setIsLoading(true);
            const response = await axios.get(`http://localhost:3005/project/talentSubmittedTo/search?term=${searchTerm}`);

            console.log(response.data)
            setSearchResults(response.data.data);
          } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults([]);
          }finally {
            setIsLoading(false);
          }
        };
    
    return(
      
        <div>
        <h2>Talent Search</h2>
        <div>
          <input
            type="text"
            placeholder="Search by first name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} >
            Search
          </button>
        </div>
  
        {isLoading && <p>Loading...</p>}
  
        {searchResults.length > 0 && (
          <div>
            <h3>Search Results:</h3>
            
              {searchResults.map((talent:any) => (
                <li key={talent.talent_id}>{talent.first_name}</li>
              ))}
            
          </div>
        )}
        
       
      </div>
  
    )
}

export default SearchTalent
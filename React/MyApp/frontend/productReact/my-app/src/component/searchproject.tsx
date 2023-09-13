import React, { useState, useEffect } from "react";
import axios from "axios";
function SearchProject() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `http://localhost:3005/project/ProjectList/search?term=${searchTerm}`
      );

      console.log(response.data.rows);
      setSearchResults(response.data.rows);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>project Search</h2>
      <div>
        <input
          type="text"
          placeholder="Search by project name"
          value={searchTerm}
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {isLoading && <p>Loading...</p>}

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>

          {searchResults.map((project: any) => (
            <li key={project.project_id}>
              {project.project_name}<br></br>
              {project.project_id}<br></br>
              {project.createdby}<br></br>
              {project.createdat}<br></br>
              {project.project_description}<br></br>
              <br></br>
              <br></br>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProject;

import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Card } from "./components/Card";
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearchInput = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className="bg-red-300">
     <div className="max-w-7xl max-auto min-h-screen">
        <Nav onSearchInput={handleSearchInput} />
        <Main data={data} searchTerm={searchTerm} />
        
      </div>
     
    </div>
  );
}

export default App;

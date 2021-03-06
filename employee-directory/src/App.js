// 1. break up UI into components
// 1a. build  jumbo component to display title and sub title
// 1b. build  form component to search employee by name
// 1c. build  table component to display employee data base
import React, { useState } from "react";
// import react bootstrap for components
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import jumbo component
import Jumbo from "./components/Jumbo/Jumbo";
// // // import search component
import Search from "./components/Search/Search.js";
// // // import table component
import MyTable from "./components/Table/Table.js";

// 4. search
// change state to search value input through call back function
// pass search value to table 
// use search value as filter
// pass value of new state to table

// use use state to import search value
// create react hook for search value
function App() {
  const [searchInput, setSearchInput] = useState("")
  console.log(searchInput)
  return (
    // display UI from components
    <div className="App">
      <Jumbo />
      <Search setSearchInput={setSearchInput} />
      <MyTable searchInput={searchInput} />
    </div>
  )
}

export default App;

// 1. break up UI into components
// 1a. build  jumbo component to display title and sub title
// 1b. build  form component to search employee by name
// 1c. build  table component to display employee data base

import './App.css';
// import jumbo component
import Jumbo from "./components/jumbo/jumbo.js";
// import search component
import Search from "./components/search/search.js";
// import table component
import Table from "./components/table/table.js";

function App() {
  return (
    // display UI from components
    <div className="App">
      <Jumbo />
      <Search />
      <Table />
    </div>
  );
}

export default App;

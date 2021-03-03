// 1. break up UI into components
// 1a. build  jumbo component to display title and sub title
// 1b. build  form component to search employee by name
// 1c. build  table component to display employee data base
import logo from './logo.svg';
import './App.css';
// import jumbo component
// import search component
// import table component

function App() {
  return (
    // display UI from components
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

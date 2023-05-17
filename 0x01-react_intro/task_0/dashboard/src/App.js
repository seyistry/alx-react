import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="App-header">School dashboard</div>
      <div className="App-body">Login to access the full dashboard</div>
      <div className="App-footer">Copyright 2020 - holberton School</div>
    </>
  );
}

export default App;

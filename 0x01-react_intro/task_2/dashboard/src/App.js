import logo from './logo.jpg';
import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="App-header">School dashboard</div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
          <button>ok</button>
        </div>
      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </>
  );
}

export default App;

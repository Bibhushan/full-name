// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState(null);

  const handleFirstName = (e)=>{
    setFirstName(e.target.value);
  }

  const handleLastName = (e)=>{
    setLastName(e.target.value);
  }

  const handleFullName = (e)=>{
    e.preventDefault();
    let fullName = null;

    if (firstName === ''){
      console.log('first name is null');
      setFullName(null);
    } else if (lastName === ''){
      console.log('last name is null');
      setFullName(null);
    } else {
      setFullName(firstName + " " + lastName);
    }

    return fullName;
  }

  return (
    <div className="App">
      <form>
        <h1>Full Name Display</h1>
        <p><span>First Name: </span><input type='text' onChange={handleFirstName}/></p>
        <p><span>Last Name: </span><input type='text' onChange={handleLastName}/></p>
        <button type='submit' onClick={handleFullName}>Submit</button>
        {fullName && <p>{fullName}</p>}
      </form>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;

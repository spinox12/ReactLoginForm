import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from './components/loginform';

function App() {
  return (
    <React.Fragment>
      <div className='page'>
      <LoginForm/>
      </div>
    </React.Fragment>
  );
}

export default App;

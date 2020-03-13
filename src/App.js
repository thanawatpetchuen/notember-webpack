import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div>
      <h1>NOTEMBER Webpack</h1>
      <img src="logo.png" alt="logo" style={{ width: '300px' }} />
    </div>
  </div>
);

export default hot(module)(App);

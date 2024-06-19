import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'; // Import the Navbar component
import Card from './Card'; // Import the Card component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Able to add the Navbar component */}
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800195122</p>
      <p>Hi I am Yu Zhou</p>
      <Card /> {/* Able to add the Card component */}
    </div>
  );
}

export default App;

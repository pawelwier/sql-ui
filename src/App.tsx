import React from 'react';
import './App.css';
import DatabaseSelect from './client/components/DatabaseSelect'
import DatabaseDetails from "./client/components/DatabaseDetails"
require('dotenv').config()

function App() {
  return (
    <>
      <DatabaseSelect />
      <DatabaseDetails />
    </>
  )
}

export default App;

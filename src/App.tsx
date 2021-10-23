import React, {useEffect, useState} from 'react';
import {getAllDatabases} from './client/controllers/DatabaseController'
import './App.css';
require('dotenv').config()

function App() {
  const [databases, setDatabases] = useState<string[]>([]);
  const [selectedDatabase, setSelectedDatabase] = useState<string>('');

  useEffect(() => {
    const getDbs = async () => {
      const dbResponse = await getAllDatabases()
      setDatabases(dbResponse)
    }
    getDbs()
  }, [])

  const selectDatabase = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDatabase(e.target.value)
  }

  return (
    <div className="App">
      <select onChange={selectDatabase}>
        <option> --- </option>
      {databases.filter(db => db !== 'sequelizemeta').map((db, i) => (
        <option value={db} key={i}>{db}</option>
      ))}
      </select>
      <div>{selectedDatabase}</div>
    </div>
  )
}

export default App;

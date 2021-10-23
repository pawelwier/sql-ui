import React, {useEffect, useState} from 'react';
import {getAllDatabases} from '../controllers/DatabaseController'
import {useStore} from '../store/database'
require('dotenv').config()

function DatabaseSelect() {
  const [databases, setDatabases] = useState<string[]>([]);

  const setDbName = useStore(state => state.setActiveDatabase)

  useEffect(() => {
    const getDbs = async () => {
      const dbResponse = await getAllDatabases()
      setDatabases(dbResponse)
    }
    getDbs()
  }, [])

  const selectDatabase = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDbName(e.target.value)
  }

  return (
    <div className="App">
    <select onChange={selectDatabase}>
      <option> --- </option>
      {databases.filter(db => db !== 'sequelizemeta').map((db, i) => (
        <option value={db} key={i}>{db}</option>
      ))}
    </select>
    </div>
  )
}

export default DatabaseSelect;

import React from 'react';
import './App.css';
import DatabaseSelect from './client/components/DatabaseSelect'
import DatabaseDetails from "./client/components/DatabaseDetails"
import {useStore} from "./client/store/database";
require('dotenv').config()

function App() {
  const dbName = useStore(state => state.activeDatabase)

  return (
    <>
      <DatabaseSelect />
      {dbName && <DatabaseDetails/>}
    </>
  )
}

export default App;

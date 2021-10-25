import React, {useState} from 'react';
import './App.css';
import {useStore} from "./client/store/database";
import DatabaseSelect from './client/components/DatabaseSelect'
import DatabaseDetails from "./client/components/DatabaseDetails"
import TableData from "./client/components/TableData";
import ModeSwitch from "./client/components/ModeSwitch";
require('dotenv').config()

function App() {
  const dbName = useStore(state => state.activeDatabase)
  const [mode, setMode] = useState<'data' | 'edit'>('data')

  return (
    <>
      <DatabaseSelect />
      {dbName && (
        <div>
          <ModeSwitch setMode={setMode}/>
          {mode === 'edit' ? <DatabaseDetails/> : <TableData tableName={dbName}/>}
        </div>)
      }
    </>
  )
}

export default App;

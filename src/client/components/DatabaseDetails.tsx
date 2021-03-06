import React, {useEffect, useState} from 'react'
import {useStore} from "../store/database"
import {
  getDatabaseDetails,
  removeDatabaseColumn
} from "../controllers/DatabaseController"
import AddColumnForm from "./AddColumnForm"
import {DatabaseFieldDetails} from "../types/DatabaseFieldDetails";

require('dotenv').config()

function DatabaseDetails() {
  const [dbColumns, setDbColumns] = useState<Record<string, DatabaseFieldDetails>>({})
  const [showAddColumnForm, setShowAddColumnForm] = useState<boolean>(false)
  const dbName = useStore(state => state.activeDatabase)

  useEffect(() => {
    const getDbDetails = async () => {
      if (!dbName) return []
      const dbDetails = await getDatabaseDetails(dbName)
      await setDbColumns(dbDetails)
    }
    getDbDetails()
  }, [dbName])

  const deleteColumn = async (columnName: string): Promise<void> => {
    await removeDatabaseColumn(dbName, columnName)
  }

  return (
    <>
      <div>
        {dbColumns && Object.keys(dbColumns).map((columnName, i) => (
          <div key={i}>
            <span>{`${columnName}: ${dbColumns[columnName].type}`}</span>
            <button onClick={() => deleteColumn(columnName)}>x</button>
          </div>
        ))}
      </div>
      <button onClick={() => setShowAddColumnForm(!showAddColumnForm)}>
        {showAddColumnForm ? 'Hide' : 'Add column'}
      </button>
      {showAddColumnForm && <AddColumnForm {...dbColumns}/>}
    </>
  )
}

export default DatabaseDetails;

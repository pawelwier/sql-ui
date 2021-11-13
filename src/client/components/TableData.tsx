import React, {useEffect, useState} from 'react'
import {getAllRecords} from '../controllers/RecordController'
import {AddRecordForm} from "./AddRecordForm";
import {getDatabaseDetails} from "../controllers/DatabaseController";
import {useStore} from '../store/database'

function TableData({tableName}: {tableName: string}) {
  const [records, setRecords] = useState<Record<string, any>[]>([])
  const [showAddRecordForm, setShowAddRecordForm] = useState<boolean>(false)

  const setDbColumnDetails = useStore<(activeDatabaseColumns: {name: string, type: string, isRequired: boolean, isEditable: boolean}[]) => void>(state => state.setActiveDatabaseColumns)
  const columns = useStore(state => state.activeDatabaseColumns)

  useEffect(() => {
    const getRecords = async (): Promise<void> => {
      const response = await getAllRecords(tableName)
      const {data} = response
      setRecords(data)
    }
    getRecords()
    const getColumnDetails = async () => {
      if (!tableName) return []
      const dbDetails = await getDatabaseDetails(tableName)
      setDbColumnDetails(Object.keys(dbDetails).map(field => ({
        name: field,
        type: dbDetails[field].type,
        isRequired: !dbDetails[field].allowNull,
        isEditable: !dbDetails[field].autoIncrement,
      })))
    }
    getColumnDetails()
  }, [tableName])

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {records.map((record, i) => (
          <tr key={i}>{columns.map((column, index) => (
            <td key={index}>
              {record[column.name] || '-'}
            </td>
          ))}</tr>
        ))}
        </tbody>
      </table>
      <button onClick={() => setShowAddRecordForm(!showAddRecordForm)}>
        {showAddRecordForm ? 'Hide' : 'Add record'}
      </button>
      {showAddRecordForm && <AddRecordForm tableName={tableName}/>}
    </>
  )
}

export default TableData

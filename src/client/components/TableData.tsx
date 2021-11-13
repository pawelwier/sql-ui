import React, {useEffect, useState} from 'react'
import {getAllRecords} from '../controllers/RecordController'
import {AddRecordForm} from "./AddRecordForm";

function TableData({tableName}: {tableName: string}) {
  const [records, setRecords] = useState<Record<string, any>[]>([])
  const [fields, setFields] = useState<Record<string, any>[]>([])
  const [showAddRecordForm, setShowAddRecordForm] = useState<boolean>(false)

  useEffect(() => {
    const getRecords = async (): Promise<void> => {
      const response = await getAllRecords(tableName)
      const {data, fields} = response
      setRecords(data)
      setFields(fields)
    }
    getRecords()
  }, [tableName])

  return (
    <>
      <table>
        <thead>
          <tr>
            {fields.map((field, i) => (
              <th key={i}>{field.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {records.map((record, i) => (
          <tr key={i}>{fields.map((field, index) => (
            <td key={index}>
              {record[field.name] || '-'}
            </td>
          ))}</tr>
        ))}
        </tbody>
      </table>
      <button onClick={() => setShowAddRecordForm(!showAddRecordForm)}>
        {showAddRecordForm ? 'Hide' : 'Add record'}
      </button>
      {showAddRecordForm && <AddRecordForm fields={fields} tableName={tableName}/>}
    </>
  )
}

export default TableData

import React, {useEffect, useState} from 'react'
import {getAllRecords} from '../controllers/RecordController'

function TableData({tableName}: {tableName: string}) {
  const [records, setRecords] = useState<Record<string, any>[]>([])
  const [fields, setFields] = useState<Record<string, any>[]>([])

  useEffect(() => {
    const getRecords = async (): Promise<void> => {
      const response = await getAllRecords(tableName)
      setRecords(response.data)
      setFields(response.fields)
    }
    getRecords()
  }, [tableName])

  return (
    <>
      <div>Data</div>
      {fields.map((field, i) => (
        <div key={i}>{field.name}</div>
      ))}
      {records.map((record, i) => (
        <div key={i}>{fields.map(field => (
          <div>
            {record[field.name]}
          </div>
        ))}</div>
      ))}
    </>
  )
}

export default TableData

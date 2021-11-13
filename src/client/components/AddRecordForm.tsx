import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import {insertNewRecord} from '../controllers/RecordController'

export function AddRecordForm({fields, tableName}: {fields: Record<string, any>[], tableName: string}) {
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({})
  const {register, handleSubmit} = useForm({
    defaultValues
  })

  const addRecord = async (data: Record<string, any>): Promise<void> => {
    await insertNewRecord(tableName, data)
  }

  useEffect(() => {
    const defaults: any = {}
    fields.forEach(field => {
      defaults[field.name] = ''
    })
    setDefaultValues(defaults)
  }, [fields])

  return (
    <>
      <form onSubmit={handleSubmit(addRecord)}>
        {Object.keys(defaultValues).map((value, i) => (
          <input className="new-record-input" key={i} placeholder={value} {...register(value)} type="text" />
        ))}
        <button type="submit">Add</button>
      </form>
    </>
  )
}

import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import {insertNewRecord} from '../controllers/RecordController'
import {useStore} from "../store/database";
import {getInputType} from "../utils/formUtils";

export function AddRecordForm({tableName}: {tableName: string}) {
  const columns = useStore(state => state.activeDatabaseColumns)
  const defaultValues: Record<string, any> = {}
  for (const column of columns) {
    defaultValues[column.name] = ''
  }
  const {register, handleSubmit} = useForm({
    defaultValues
  })

  const addRecord = async (data: Record<string, any>): Promise<void> => {
    await insertNewRecord(tableName, data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(addRecord)}>
        {columns.map((column, i) => (
          <div key={i}>
            <label>
              {column.name}:
            </label>
            <input className="new-record-input" disabled={!column.isEditable} placeholder={column.name} {...register(column.name)} type={getInputType(column.type)} />
            {column.isRequired && <span>
              *
            </span>}
          </div>
        ))}
        <button type="submit">Add</button>
      </form>
    </>
  )
}

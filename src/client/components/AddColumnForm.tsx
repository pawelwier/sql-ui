import React from 'react'
import {useForm} from "react-hook-form";
import {useStore} from "../store/database"
import {addDatabaseColumn} from "../controllers/DatabaseController";
import {DatabaseColumnCreation} from "../types/DatabaseColumnCreation";
import {DatabaseFieldDetails} from "../types/DatabaseFieldDetails";

function AddColumnForm(columns:  Record<string, DatabaseFieldDetails>) {
  const {register, handleSubmit} = useForm<DatabaseColumnCreation>({
    defaultValues: {
      name: '',
      type: '',
      after: '',
    }
  })
  const dbName = useStore<string>(state => state.activeDatabase)

  const addColumn = async (data: any): Promise<void> => {
    const {name, type, after} = data
    await addDatabaseColumn(dbName, name, type, after)
  }

  return (
    <>
      <form onSubmit={handleSubmit(addColumn)}>
        <input placeholder="name" {...register("name")} type="text" />
        <input placeholder="type" {...register("type")} type="text" />
        <select placeholder="after field (optional)" {...register("after")}>
          {Object.keys(columns).map((column, i) => (
            <option key={i} value={column}>
              {column}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddColumnForm;

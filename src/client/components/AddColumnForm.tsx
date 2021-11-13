import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useStore} from "../store/database"
import {addDatabaseColumn} from "../controllers/DatabaseController";
import {DatabaseColumnCreation} from "../types/DatabaseColumnCreation";
import {DatabaseFieldDetails} from "../types/DatabaseFieldDetails";

function AddColumnForm(columns:  Record<string, DatabaseFieldDetails>) {
  const [columnType, setColumnType] = useState<string>('')
  const [varcharLimit, setVarCharLimit] = useState<number>(64)
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

  const columnTypeEdited = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumnType(e.target.value)
  }

  const varcharLimitEdited = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVarCharLimit(Number(e.target.value))
  }

  return (
    <>
      <form onSubmit={handleSubmit(addColumn)}>
        <input placeholder="name" {...register("name")} type="text" />
        <select placeholder="type" {...register("type", {
          onChange: columnTypeEdited,
          value: columnType.includes('VARCHAR') ? `VARCHAR(${varcharLimit})` : columnType
        })}>
          <option value="VARCHAR">VARCHAR</option>
          <option value="INT UNSIGNED">INT UNSIGNED</option>
          <option value="DATETIME">DATETIME</option>
        </select>
        {columnType.includes('VARCHAR') && <input onChange={varcharLimitEdited} defaultValue={64} type="number"/>}
        after: <select placeholder="after field (optional)" {...register("after")}>
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

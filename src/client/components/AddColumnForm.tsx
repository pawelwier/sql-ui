import React from 'react'
import {useForm} from "react-hook-form";
import {useStore} from "../store/database"
import {addDatabaseColumn} from "../controllers/DatabaseController";

function AddColumnForm() {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      name: '',
      type: '',
      after: '',
    }
  })
  const dbName = useStore(state => state.activeDatabase)

  const addColumn = async (data: any): Promise<void> => {
    console.log(data)
    const {name, type, after} = data
    await addDatabaseColumn(dbName, name, type, after)
  }

  return (
    <>
      <form onSubmit={handleSubmit(addColumn)}>
        <input placeholder="name" {...register("name")} type="text" />
        <input placeholder="type" {...register("type")} type="text" />
        <input placeholder="after field (optional)" {...register("after")} type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddColumnForm;

import React from 'react'
// import {DataTypes} from 'sequelize'
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

  // const DATA_TYPES = [
  //   DataTypes.DATE,
  //   DataTypes.INTEGER,
  //   DataTypes.STRING,
  // ]

  const addColumn = async (data: any) => {
    console.log(data)
    const {name, type, after} = data
    // @ts-ignore
    addDatabaseColumn(dbName, name, type, after)
  }

  return (
    <>
      <form onSubmit={handleSubmit(addColumn)}>
        <input placeholder="name" {...register("name")} type="text" />
        {/*<select>*/}
        {/*  {DATA_TYPES.map((type, i) => (<div key={i}>{type}</div>))}*/}
        {/*</select>*/}
        <input placeholder="type" {...register("type")} type="text" />
        <input placeholder="after field (optional)" {...register("after")} type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddColumnForm;

import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";

export function AddRecordForm({fields}: {fields: Record<string, any>[]}) {
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({})
  const {register, handleSubmit} = useForm({
    defaultValues
  })

  const addRecord = async (data: any): Promise<void> => {
    console.log(data)
    const {} = data
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

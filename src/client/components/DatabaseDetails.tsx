import React from 'react'
import {useStore} from "../store/database"
require('dotenv').config()

function DatabaseDetails() {
  const dbName = useStore(state => state.activeDatabase)

  return (
    <>
      <div>
        {dbName}
      </div>
    </>
  )
}

export default DatabaseDetails;

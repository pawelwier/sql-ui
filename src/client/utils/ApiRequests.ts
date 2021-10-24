import axios from "axios"
require('dotenv').config()

export const makeApiRequest: any = async (method: 'get' | 'post' | 'put' | 'delete', url: string, data?: any) => {
  const response = await axios({
    method,
    url,
    data,
  })
  return response.data
}

export const getApiUrl: (url: string) => string = url => `${process.env.REACT_APP_API_HOST}/${url}`

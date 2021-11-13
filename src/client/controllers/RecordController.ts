import {makeApiRequest, getApiUrl} from '../utils/ApiRequests'

export const getAllRecords = async (tableName: string): Promise<{data: Record<string, any>[], fields: Record<string, any>[]}> => {
  const response = await makeApiRequest('get', getApiUrl(`data/${tableName}`))
  const {data, fields} = response
  return {data, fields}
}

export const insertNewRecord = async (tableName: string, data: Record<string, string>): Promise<any> => {
  return await makeApiRequest('post', getApiUrl(`data/${tableName}`), data)
}

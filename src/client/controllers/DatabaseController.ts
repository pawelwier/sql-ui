import {makeApiRequest, getApiUrl} from '../utils/apiRequests'
import {DatabaseFieldDetails} from "../types/DatabaseFieldDetails";

export async function getAllDatabases(): Promise<string[]> {
  return await makeApiRequest('get', getApiUrl('dbs'))
}

export async function getDatabaseDetails(tableName: string): Promise<Record<string, DatabaseFieldDetails>> {
  return await makeApiRequest('get', getApiUrl(`dbs/${tableName}/details`))
}

export async function addDatabaseColumn(tableName: string, name: string, type: string, after?: string): Promise<void> {
  return await makeApiRequest('post', getApiUrl(`dbs/${tableName}/add-column`), {name, type, after})
}

export async function removeDatabaseColumn(tableName: string, name: string): Promise<void> {
  return await makeApiRequest('delete', getApiUrl(`dbs/${tableName}/remove-column`), {name})
}

import {makeApiRequest, getApiUrl} from '../utils/ApiRequests'

export async function getAllDatabases(): Promise<string[]> {
  return await makeApiRequest('get', getApiUrl('dbs'))
}

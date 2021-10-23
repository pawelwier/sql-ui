import {makeApiRequest, getApiUrl} from '../utils/ApiRequests'

export async function getAllUsers() {
  return await makeApiRequest('get', getApiUrl('users'))
}

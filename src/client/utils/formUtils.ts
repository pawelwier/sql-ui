export const getInputType = (sqlType: string): string => {
  const isString = sqlType.toLowerCase().includes('varchar')
  const isNumber = sqlType.toLowerCase().includes('int')
  const isDate = sqlType.toLowerCase().includes('date')
  return isString ? 'text' : isNumber ? 'number' : isDate ? 'date' : ''
}

export const formatDate = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

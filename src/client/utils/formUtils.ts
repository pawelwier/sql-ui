export const getInputType = (sqlType: string): string => {
  const isString = sqlType.toLowerCase().includes('varchar')
  const isNumber = sqlType.toLowerCase().includes('int')
  const isDate = sqlType.toLowerCase().includes('date')
  return isString ? 'text' : isNumber ? 'number' : isDate ? 'date' : ''
}

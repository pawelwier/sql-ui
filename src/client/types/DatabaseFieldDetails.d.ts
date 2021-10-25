export interface DatabaseFieldDetails {
  type: string,
  allowNull: false,
  defaultValue: string | number | boolean,
  primaryKey: true,
  autoIncrement: true,
  comment: string
}

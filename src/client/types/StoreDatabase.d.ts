export interface StoreDatabase {
  activeDatabase: string
  activeDatabaseColumns: {name: string, type: string, isRequired: boolean, isEditable: boolean}[]
  setActiveDatabase: (activeDatabase: string) => void
  setActiveDatabaseColumns: (activeDatabaseColumns: {name: string, type: string, isRequired: boolean, isEditable: boolean}[]) => void,

}

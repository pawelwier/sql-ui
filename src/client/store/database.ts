import create from 'zustand'
import {StoreDatabase} from "../types/StoreDatabase";

export const useStore = create<StoreDatabase>(set => ({
  activeDatabase: '',
  activeDatabaseColumns: [],
  setActiveDatabase: (activeDatabase: string) => set({activeDatabase}),
  setActiveDatabaseColumns: (activeDatabaseColumns: {name: string, type: string, isRequired: boolean, isEditable: boolean}[]) => set({activeDatabaseColumns}),
}))

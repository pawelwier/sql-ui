import create from 'zustand'
import {StoreDatabase} from "../types/StoreDatabase";
import {DatabaseColumnData} from "../types/DatabaseColumnData";

export const useStore = create<StoreDatabase>(set => ({
  activeDatabase: '',
  activeDatabaseColumns: [],
  setActiveDatabase: (activeDatabase: string) => set({activeDatabase}),
  setActiveDatabaseColumns: (activeDatabaseColumns: DatabaseColumnData[]) => set({activeDatabaseColumns}),
}))

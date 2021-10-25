import create from 'zustand'
import {StoreDatabase} from "../types/StoreDatabase";

export const useStore = create<StoreDatabase>(set => ({
  activeDatabase: '',
  setActiveDatabase: (activeDatabase: string) => set({activeDatabase})
}))

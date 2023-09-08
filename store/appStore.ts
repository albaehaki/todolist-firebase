import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface DataItem {
  id: number;
  value: string;
}

interface appStoreD {
  data: null | DataItem[];
  addData: (data: DataItem[]) => void;
}


const useAppStore = create(
  persist(
    (set) => ({
      data: null,
      addData: (data: DataItem[]) => set({ data }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useAppStore;




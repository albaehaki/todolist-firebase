import React, { useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import useAppStore from '@/store/appStore'; // Impor Zustand store yang telah Anda definisikan

const FirestoreData = () => {
  const setFirestoreData = useAppStore((state) => state.setFirestoreData);

    const fetchData = async () => {
      try {
        const dataRef = firestore.collection('data'); // Ganti dengan nama koleksi Anda
        const snapshot = await dataRef.get();
        const data = snapshot.docs.map((doc) => doc.data());

        // Simpan data ke Zustand
        setFirestoreData(data);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();


  return {fetchData};
};

export default FirestoreData;

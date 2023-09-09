import { isServer } from '@/utils/isServer';
import { initializeApp } from 'firebase/app';

const initFirebase = () => {
  if (!isServer()) {
    initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
      authDomain: window.location.host.split(':')[0],
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_STORAGE_BUCKET,
      messagingSenderId:
        process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_MEASUREMENT_ID,
    });
  }
};

export default initFirebase;

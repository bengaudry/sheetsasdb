import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebaseCredentials';

const app = initializeApp(firebaseConfig);

export function getFirebaseApp() {
  return app;
}
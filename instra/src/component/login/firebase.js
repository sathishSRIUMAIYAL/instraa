import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDs6JOVq76IhjorLezHvRafTnPcOLQEKPQ",
  authDomain: "validation-58ba4.firebaseapp.com",
  projectId: "validation-58ba4",
  storageBucket: "validation-58ba4.appspot.com",
  messagingSenderId: "402476708460",
  appId: "1:402476708460:web:93b0e352b29ff89f561e49"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth =app.auth();

export default app
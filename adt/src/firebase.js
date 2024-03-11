import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'; // Import storage module explicitly

const firebaseConfig = {
    apiKey: "AIzaSyAdaofL9AcLznTAvxLTKcZlHll77Rvioy8",
    authDomain: "netwatch-cbe2b.firebaseapp.com",
    projectId: "netwatch-cbe2b",
    storageBucket: "netwatch-cbe2b.appspot.com",
    messagingSenderId: "436914819061",
    appId: "1:436914819061:web:c41163d388ec44aa36dabc",
    measurementId: "G-WNF918T1EZ"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
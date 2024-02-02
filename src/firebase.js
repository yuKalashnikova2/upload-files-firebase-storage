import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDUr0CHYVfmpVxygonZUWyUHA_dQyF3zc4',
  authDomain: 'pinia-upload-files.firebaseapp.com',
  projectId: 'pinia-upload-files',
  storageBucket: 'pinia-upload-files.appspot.com',
  messagingSenderId: '332387610269',
  appId: '1:332387610269:web:314ea9a02f2858de8b6e74',
}

let defaultProject = initializeApp(firebaseConfig)
let defaultStorage = getStorage(defaultProject)

export { defaultStorage }

const storage = getStorage();
const imageRef = ref(storage, 'images/' + file.name);
uploadBytesResumable(imageRef, file, metadata)
  .then((snapshot) => {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log('File metadata:', snapshot.metadata);
    getDownloadURL(snapshot.ref).then((url) => {
      console.log('File available at', url);
      // ...
    });
  }).catch((error) => {
    console.error('Upload failed', error);
    // ...
  });
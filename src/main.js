import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
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

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')

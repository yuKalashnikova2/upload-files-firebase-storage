import { defineStore } from 'pinia'
import { ref as vueRef } from 'vue'

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"




export const useFilesStore = defineStore('files', () => {
  const files = vueRef([])
  const storage = getStorage()
  const isLoading = vueRef(false)
  const isDounlouded = vueRef(false)
  const isError = vueRef(false)

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files)
    files.value = files.value.concat(newFiles)
    console.log('НАЖАТИЕ НА КНОПКУ', files.value)

    newFiles.forEach((file) => {
      const imageRef = ref(storage, 'images/' + file.name)
      uploadBytes(imageRef, file)
        .then((snapshot) => {
          console.log('Uploaded', snapshot.totalBytes, 'bytes.');
          console.log('File metadata:', snapshot.metadata);
          getDownloadURL(snapshot.ref).then((url) => {
            console.log('ФУНКЦИЯ ИЗ ФЕРБЭЙС', url);
            // ...
          });
        }).catch((error) => {
          console.error('Upload failed', error);
        })
    })


  }

  const areaDropFiles = (event) => {
    event.preventDefault()
    const newFiles = Array.from(event.dataTransfer.files)
    files.value = files.value.concat(newFiles)

    console.log('ПЕРЕТАСКИВАНИЕ ДРАГ ЭНД ДРОП', files.value)

    newFiles.forEach((file) => {
      const imageRef = ref(storage, 'images/' + file.name)



      uploadBytes(imageRef, file)
        .then((snapshot) => {
          isLoading = true
          console.log('Uploaded', snapshot.totalBytes, 'bytes.');
          getDownloadURL(snapshot.ref).then((url) => {
            console.log('ФУНКЦИЯ ИЗ ФЕРБЭЙС', url);
            isDounlouded.value = true
          });
        }).catch((error) => {
          console.error('Upload failed', error);
          isError.value = true
        })
    })
  }

  const removeFile = (file) => {
    return files.value.splice(files.value.indexOf(file), 1)
  }



  return { files, handleFileChange, areaDropFiles, removeFile, isLoading, isDounlouded }
})

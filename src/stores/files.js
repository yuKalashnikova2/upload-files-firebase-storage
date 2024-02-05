import { defineStore } from 'pinia'
import { ref as vueRef, onMounted } from 'vue'

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  getMetadata,
  deleteObject,
} from 'firebase/storage'

export const useFilesStore = defineStore('files', () => {
  const files = vueRef([])
  const storage = getStorage()
  const isLoading = vueRef(false)
  const isDounlouded = vueRef(false)
  const isError = vueRef(false)

  const fetchFilesFromFirebase = async () => {
    try {
      const listRef = ref(storage, 'images/')
      const listResult = await listAll(listRef)
      for (const itemRef of listResult.items) {
        const url = await getDownloadURL(itemRef)
        const metadata = await getMetadata(itemRef)
        files.value.push({ name: itemRef.name, url, size: metadata.size })
      }
    } catch (error) {
      isError.value = true
      console.error('ERROR', error)
    }
  }

  onMounted(fetchFilesFromFirebase)

  const handleFileChange = async (event) => {
    try {
      const newFiles = Array.from(event.target.files)
      files.value = files.value.concat(newFiles)

      for (const file of newFiles) {
        const imageRef = ref(storage, 'images/' + file.name)
        const snapshot = await uploadBytes(imageRef, file)
        console.log(snapshot.metadata)
      }
    } catch (error) {
      console.error('ОШИБКА', error)
    }
  }

  const areaDropFiles = async (event) => {
    try {
      event.preventDefault()
      const newFiles = Array.from(event.dataTransfer.files)
      files.value = files.value.concat(newFiles)

      console.log('ПЕРЕТАСКИВАНИЕ ДРАГ ЭНД ДРОП', files.value)
      for (const file of newFiles) {
        const imageRef = ref(storage, 'images/' + file.name)
        const snapshot = await uploadBytes(imageRef, file)
      }
    } catch (error) {
      console.error('ОШИБКА', error)
    }
  }

  const removeFile = async (file) => {
    try {
      const imageRef = ref(storage, 'images/' + file.name)
      await deleteObject(imageRef)
      files.value = files.value.filter((f) => f !== file)
    } catch (error) {
      console.error('ОШИБКА УДАЛЕНИЯ ЭЛЕМЕНТА', error)
    }
  }

  return {
    files,
    handleFileChange,
    areaDropFiles,
    removeFile,
    isLoading,
    isDounlouded,
    fetchFilesFromFirebase,
  }
})

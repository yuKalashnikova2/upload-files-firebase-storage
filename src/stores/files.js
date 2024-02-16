import { defineStore } from 'pinia'
import { ref as vueRef, onMounted } from 'vue'
import { useRouter } from 'vue-router'

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
  const errorMessage = vueRef('Some went wrong')

  const router = useRouter()


  const closeError = () => {
    console.log('РАБОТАЕТ', isError.value)
    isError.value = false
  }

  const fetchFilesFromFirebase = async () => {
    try {
      isLoading.value = true

      const listRef = ref(storage, 'images/')
      const listResult = await listAll(listRef)
      for (const itemRef of listResult.items) {
        const url = await getDownloadURL(itemRef)
        const metadata = await getMetadata(itemRef)
        files.value.push({
          name: itemRef.name,
          url,
          size: metadata.size,
          isDrawer: false,
        })
      }
      if (files.value.length > 0) {
        router.push('/upload-files')
      } else {
        router.push('/')
      }
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.log('ERROR', error, isError.value)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchFilesFromFirebase)
  const handleFileChange = async (event) => {
    try {
      isLoading.value = true

      const newFiles = Array.from(event.target.files)
      files.value = files.value.concat(newFiles)
      console.log(newFiles)
      if (files.value.length > 0) {
        router.push('/upload-files')
      } else {
        router.push('/')
      }
      for (const file of newFiles) {
        const imageRef = ref(storage, 'images/' + file.name)
        const snapshot = await uploadBytes(imageRef, file)

        fetchFilesFromFirebase()
        console.log(snapshot.metadata)
      }
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.error('ОШИБКА', error)
    } finally {
      isLoading.value = false
    }
  }

  const areaDropFiles = async (event) => {
    try {
      isLoading.value = true
      event.preventDefault()
      const newFiles = Array.from(event.dataTransfer.files)
      // files.value = files.value.concat(newFiles)

      console.log('ПЕРЕТАСКИВАНИЕ ДРАГ ЭНД ДРОП', files.value)
      for (const file of newFiles) {
        const imageRef = ref(storage, 'images/' + file.name)
        const snapshot = await uploadBytes(imageRef, file)
        fetchFilesFromFirebase()
      }
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.error('ОШИБКА', error)
    } finally {
      isLoading.value = false
    }
  }

  const removeFile = async (file) => {
    try {
      isLoading.value = true
      const imageRef = ref(storage, 'images/' + file.name)
      await deleteObject(imageRef)
      files.value = files.value.filter((f) => f !== file)
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.error('ОШИБКА УДАЛЕНИЯ ЭЛЕМЕНТА', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    files,
    handleFileChange,
    areaDropFiles,
    removeFile,
    isLoading,
    isDounlouded,
    isError,
    fetchFilesFromFirebase,
    errorMessage,
    closeError,
  }
})

import { defineStore } from 'pinia'
import { ref as vueRef, nextTick } from 'vue'
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
    isError.value = false
  }

  const fetchFilesFromFirebase = async () => {
    try {
      isLoading.value = true

      const listRef = ref(storage, 'images/')
      const listResult = await listAll(listRef)
      files.value = [] 
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
        router.replace('/upload-files')
      }
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.log('ERROR', error, isError.value)
    } finally {
      isLoading.value = false
    }
  }

  const addFilesAndRedirect = async (newFiles) => {
    for (const file of newFiles) {
      const imageRef = ref(storage, 'images/' + file.name)
      const snapshot = await uploadBytes(imageRef, file)
      console.log(snapshot.metadata)
    }

    await fetchFilesFromFirebase()
  }

  const handleFileChange = async (event) => {
    try {
      isLoading.value = true

      const newFiles = Array.from(event.target.files)
      await addFilesAndRedirect(newFiles)

      console.log(newFiles)
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.error('ERROR', error)
    } finally {
      isLoading.value = false
    }
  }

  nextTick(() => {
    fetchFilesFromFirebase()
  })

  const areaDropFiles = async (event) => {
    try {
      isLoading.value = true
      event.preventDefault()
      const newFiles = Array.from(event.dataTransfer.files)
      await addFilesAndRedirect(newFiles)
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.error('ERROR', error)
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

      if (files.value.length === 0) {
        router.replace('/')
      }
    } catch (error) {
      isError.value = true
      errorMessage.value = error
      console.error('ERROR REMOVE FILE', error)
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

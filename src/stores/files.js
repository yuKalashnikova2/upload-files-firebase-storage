import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilesStore = defineStore('files', () => {
  const files = ref([])

  const handleFileChange = (event) => {
    files.value = files.value.concat(Array.from(event.target.files))
    console.log('files', files.value)
  }

  const areaDropFiles = (event) => {
    event.preventDefault()
    const newFiles = Array.from(event.dataTransfer.files)
    files.value = files.value.concat(newFiles)
  }

  const removeFile = (file) => {
    return files.value.splice(files.value.indexOf(file), 1)
  }

  return { files, handleFileChange, areaDropFiles, removeFile }
})

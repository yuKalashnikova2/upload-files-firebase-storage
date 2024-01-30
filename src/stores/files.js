import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilesStore = defineStore('files', () => {
  const files = ref([])

  const handleFileChange = (event) => {
    files.value = files.value.concat(Array.from(event.target.files))
  }

  const areaDropFiles = (event) => {
    event.preventDefault()
    const newFiles = Array.from(event.dataTransfer.files)
    files.value = files.value.concat(newFiles)
  }

  return { files, handleFileChange, areaDropFiles }
})

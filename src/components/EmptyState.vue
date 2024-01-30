<script setup>
import InputFile from './InputFile.vue'
import { ref } from 'vue'

const files = ref([])

const handleFileChange = (event) => {
  files.value = files.value.concat(Array.from(event.target.files))
}

const areaDropFiles = (event) => {
  event.preventDefault()
  const newFiles = Array.from(event.dataTransfer.files)
  files.value = files.value.concat(newFiles)
}
</script>

<template>
  <form class="empty-state" @submit.prevent>
    <div
      class="empty-state__border"
      @drop="areaDropFiles"
      @dragover.prevent
      @dragenter.prevent
    >
      <img
        class="empty-state__illustration"
        src="/Illustration.svg"
        alt="illustration"
      />
      <h2 class="empty-state__title">Start by uploading a file</h2>
      <p class="empty-state__description">
        Any assets used in projects will live here.Start creating by uploading
        your files.
      </p>
    </div>

    <InputFile :files="files" @handle-file-change="handleFileChange" />
  </form>
</template>

<style lang="scss" scoped>
.empty-state {
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  & > * {
    width: 100%;
  }
  &__border {
    border: 1px dashed #d0d5dd;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
  &__title {
    color: #101828;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  &__description {
    color: #667085;
    text-align: center;

    font-size: 14px;

    font-weight: 400;
    line-height: 20px;
  }
  &__illustration {
    width: 150px;
    height: 120px;
  }
}
.drop-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.dragging-over {
  background-color: #2f5b84;
}
</style>

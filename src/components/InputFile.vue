<script setup>
import { useFilesStore } from '../stores/files.js'
const store = useFilesStore()
</script>

<template>
  <label class="upload" for="upload-file">
    <img class="upload__image" src="/upload-cloud.svg" alt="upload" />
    Upload
    <input
      @change="store.handleFileChange"
      type="file"
      name="upload-file"
      id="upload-file"
      class="upload__input"
    />
  </label>
</template>

<style lang="scss">
.upload {
  border-radius: 8px;
  border: 1px solid #7f56d9;
  background: #7f56d9;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &__input {
    display: none;
  }
}
</style>

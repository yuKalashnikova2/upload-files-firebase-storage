<script setup>
import Button from './Button.vue'
</script>

<template>
  <div class="empty-state">
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
    <Button @click="() => console.log('catch!')">
      <img src="/upload-cloud.svg" alt="upload" />
      <span>Upload</span>
    </Button>
  </div>
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
</style>

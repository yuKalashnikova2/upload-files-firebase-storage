<script setup>
import { ref } from 'vue'
import { useFilesStore } from '../stores/files.js'

const store = useFilesStore()

const isDrawer = ref(false)

const dataUpload = ref(
  new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
)

const chooseIconImage = (str) => {
  let lastThree = str.slice(-3)
  if (
    lastThree === 'jpg' ||
    lastThree === 'peg' ||
    lastThree === 'png' ||
    lastThree === 'svg'
  ) {
    return 'image.svg'
  }
  if (lastThree === 'pdf' || lastThree === 'docx') {
    return 'text.svg'
  }

  if (lastThree === 'mp4') {
    return 'video.svg'
  }

  if (lastThree === 'fig') {
    return 'figma.svg'
  }
  if (lastThree === 'framerx') {
    return 'framer.svg'
  } else {
    return 'text.svg'
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return bytes + ' bytes'
  } else if (bytes < 1024 * 1024) {
    return Math.floor(bytes / 1024) + ' KB'
  } else {
    return Math.floor(bytes / (1024 * 1024)) + ' MB'
  }
}
</script>

<template>
  <div class="card" v-for="file in store.files">
    <div class="card__main">
      <div class="card__main-img">
        <img :src="'/files/' + chooseIconImage(file.name)" alt="" />
      </div>
      <div class="card__main-description">
        <h2 class="card__main-description__title">
          {{ file.name.substring(0, 10) }}
        </h2>
        <span class="card__main-description__size"
          >{{ formatFileSize(file.size) }}
        </span>
      </div>
    </div>
    <div class="card__info">
      <div :class="['card__info-size', { 'card__info_none': isDrawer} ]">{{ formatFileSize(file.size) }}</div>

      <div :class="['card__info-date', { 'card__info_none': isDrawer} ]">{{ dataUpload }}</div>

      <div class="card__info-img" @click="isDrawer = !isDrawer">
        <img src="/more.svg" alt="more" v-if="!isDrawer" />

        <div class="card__info-img-drawer">
          <button
            class="upload"
            v-if="isDrawer"
            @click="store.removeFile(file)"
          >
            Delete file
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaecf0;
  background: #f9fafb;
  padding: 16px 24px;
  @media (max-width: 575px) {
    padding: 13px;
  }
  &__main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 575px) {
      flex-grow: 0;
    }
    &-img {
      border-radius: 20px;
      background: #f4ebff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
    &-description__title {
      color: #101828;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
    &-description__size {
      color: #667085;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      @media (max-width: 575px) {
        display: none;
      }
    }
  }
  &__info {
    display: flex;
    gap: 70px;
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    @media (max-width: 575px) {
      gap: 10px;
    }
    &-img {
      cursor: pointer;
    }
    &_none{
      display: none;
    }
  }
}
</style>

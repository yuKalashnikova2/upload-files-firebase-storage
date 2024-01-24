<script setup>
import Title from './components/Title.vue'
import Button from './components/Button.vue'
import { useCounterStore } from './store/index.js'

const store = useCounterStore()
</script>

<template>

  <div class="container">
    <Title />

    <Button @click="() => console.log('catch!')">
      <img src="/upload-cloud.svg" alt="">
      <span>Upload</span>
    </Button>
  </div>


</template>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px;
    background: white;
  }
</style>

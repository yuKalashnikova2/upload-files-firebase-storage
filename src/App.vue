<script setup>
import Title from './components/Title.vue';
import { useCounterStore } from './store/index.js'

const store = useCounterStore()
</script>

<template>

  <div class="container">
    <Title />
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

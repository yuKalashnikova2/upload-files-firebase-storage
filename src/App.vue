<script setup>
import Title from './components/Title.vue'
import EmptyState from './components/EmptyState.vue'
import Cards from './components/Cards.vue'
import Preloader from './components/Preloader.vue'
import ErrorWindow from './components/ErrorWindow.vue'
import { useFilesStore } from './stores/files.js'
const store = useFilesStore()
</script>

<template>
  <div class="container">

      <ErrorWindow v-if="store.isError" />


    <Preloader v-if="store.isLoading" />
    <Title label="My project" />
    <router-view></router-view>

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

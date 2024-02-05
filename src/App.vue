<script setup>
import Title from './components/Title.vue'
import EmptyState from './components/EmptyState.vue'
import Cards from './components/Cards.vue'
import { useFilesStore } from './stores/files.js'
const store = useFilesStore()
</script>

<template>
  <div class="container">
    <Title label="My project" />
    <div class="content" v-if="store.files.length === 0">
      <EmptyState />
    </div>
    <Cards v-else />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  background: white;
}
.content {
  max-width: 512px;
  margin: 0 auto;
  padding: 40px 0;
}
</style>

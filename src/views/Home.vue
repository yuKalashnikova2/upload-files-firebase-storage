<script setup>
    import EmptyState from '../components/EmptyState.vue'
    import { useFilesStore } from '../stores/files.js'
    const store = useFilesStore()

</script>
<template>
    <div class="content">
      <EmptyState />
    </div>

</template>

<style lang="scss" scoped>
.content {
  max-width: 512px;
  margin: 0 auto;
}
</style>
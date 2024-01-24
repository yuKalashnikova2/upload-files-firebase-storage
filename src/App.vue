<script setup>
import { useCounterStore } from './store/index.js'

const store = useCounterStore()
</script>

<template>
  <h1>Pinia + Firebase Storage + Vue 3</h1>
  <div>
    {{ store.name }}
  </div>


</template>

<style lang="scss" scoped>

</style>

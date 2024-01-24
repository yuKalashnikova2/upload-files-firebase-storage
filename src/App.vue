<script setup>
import Title from './components/Title.vue';
import { useCounterStore } from './store/index.js'

const store = useCounterStore()
</script>

<template>
  <Title />
  <div>
    {{ store.name }}
  </div>


</template>

<style lang="scss" scoped>

</style>

<script setup>
import Title from './components/Title.vue'
import { useCounterStore } from './store/index.js'
import EmptyState from './components/EmptyState.vue';
import Cards from './components/Cards.vue';


const store = useCounterStore()
</script>

<template>

  <div class="container">
    <Title label="My project" />
    <div class="content">

      <EmptyState />
    </div>
 <Cards />
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

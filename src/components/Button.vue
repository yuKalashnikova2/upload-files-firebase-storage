<script setup>
const emits = defineEmits(['catch'])
</script>

<template>
  <button class="button" @click="$emit('catch')">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  
  border-radius: 8px;
  border: 1px solid #7f56d9;
  background: #7f56d9;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
      opacity: 0.8;   
  }
}
</style>

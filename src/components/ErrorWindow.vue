<script setup>
import { useFilesStore } from '../stores/files.js'
const store = useFilesStore()
</script>

<template>
  <div class="error">
    <span class="error__text">Error:
      <div>{{ store.errorMessage }}</div>
    </span>
    <span class="error__closed" @click="store.closeError">&#x2715;</span>
  </div>
</template>

<style lang="scss" scoped>
.error {
  width: 50%;
  height: 100px;
  box-shadow: 1px 5px 2px #7f56d9;
  padding: 15px;
  position: relative;
  text-align: center;
  margin: 0 auto;
  & span {
    display: block;
  }
  &__text {
    color: red;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    & div {
      color: #7f56d9;
      padding-bottom: 15px;
      text-transform: none;
    }
  }
  &__closed {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    padding: 5px;
    margin: 3px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: 1px 5px 2px #7f56d9;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}
</style>

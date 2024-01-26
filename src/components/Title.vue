<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>

<template>
  <div class="title">
    <h1 class="title__name">{{ label }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding: 20px 24px;
  &__name {
    color: #101828;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
}
</style>

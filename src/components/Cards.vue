<script setup>
import CardFile from './CardFile.vue'
import Title from './Title.vue'
import InputFile from './InputFile.vue'
</script>

<template>
  <div class="cards">
    <div class="cards__header">
      <Title label="Files uploaded" />

     
      <div class="p-24">
        <InputFile />

      </div>
    </div>
    <div class="cards__body">
      <div class="cards__body-header">
        <div>File name</div>
        <div class="gap-70">
          <div>File size</div>
          <div>Date uploaded</div>
          <div></div>
        </div>
      </div>
    </div>
    <CardFile />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  &__header {
    display: flex;
    justify-content: space-between;
    @media (max-width: 575px) {
    flex-direction: column;
  }
  }
  &__body {
    & span {
      display: block;
    }
    &-header {
      display: flex;
      justify-content: space-between;
      color:  #667085;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      padding: 12px 24px;
        @media (max-width: 575px) {
    display: none;
  }
      & > :nth-child(1) {
        flex-grow: 1;
      }
    }
  }
}
</style>

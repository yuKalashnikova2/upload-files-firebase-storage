<script setup>
const emit = defineEmits(['handleFileChange'])

</script>

<template>
  <div class="upload">
    <img class="upload__image" src="/upload-cloud.svg" alt="upload" />
    <label class="upload__label" for="upload-file">Проверка
    </label>
    <input @change="emit('handleFileChange', $event)" type="file" name="upload-file" id="upload-file" class="upload__input" 
 />

  </div>
</template>

<style lang="scss" scoped>
.upload {
  border-radius: 8px;
  border: 1px solid #7f56d9;
  background: #7f56d9;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

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
      cursor: pointer;   
  }
  &__label {
    &:hover {
      cursor: pointer;
    }
  }
  &__input {
    display: none;
    // width: 100%;
    // height: auto;
    // opacity: 0;
    // overflow: hidden;
    // position: absolute;
    // z-index: -1;

  }
}
</style>

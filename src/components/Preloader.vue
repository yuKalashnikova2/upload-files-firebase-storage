<template>
  <div class="preloader">
    <div class="preloader__loader"></div>
    <span class="preloader__text">Please, waiting...</span>
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  opacity: 1;
  z-index: 999;
  transition: 0.5s;

  &__loader {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: loader 2s linier infinite;

    @keyframes loader {
      0% {
        transform: rotate(0deg);
        box-shadow: 1px 5px 2px #7f56d9;
      }
      50% {
        transform: rotate(180deg);
        box-shadow: 1px 5px 2px #8950a1;
      }
      100% {
        transform: rotate(360deg);
        box-shadow: 1px 5px 2px #c367cf;
      }
    }
    &::before {
      content: '';
      height: 100%;
      width: 100%;
      box-shadow: 0 0 5px 5px rgba(127, 86, 217, 0.5);
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      animation: loader 2s linear infinite;
    }
  }
  &__text {
    color: #7f56d9;
    text-transform: uppercase;
    animation: text 3s linear infinite;
    @keyframes text {
      50% {
        color: aliceblue;
      }
    }
  }
}
</style>

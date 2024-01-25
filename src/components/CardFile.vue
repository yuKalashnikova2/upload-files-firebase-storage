<script setup>
const props = defineProps({
  extension: {
    type: String,
    default: 'jpg',
  },
  file__size: {
    type: String,
    default: '1.5 MB',
  },
})
</script>

<template>
  <div class="card">
    <div class="card__main">
      <div class="card__main-img">
        <img src="/files/file.svg" alt="" />
      </div>
      <div class="card__main-description">
        <h2 class="card__main-description__title">Title.{{ extension }}</h2>
        <span class="card__main-description__size">{{ file__size }}</span>
      </div>
    </div>

    <div class="card__info">
      <div class="card__info-size">
        {{ file__size }}
      </div>

      <div class="card__info-date">22 Jan, 2022</div>

      <div class="card__info-imf">
        <img src="/more.svg" alt="more" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaecf0;
  background: #f9fafb;
  padding: 16px 24px;
  &__main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    &-img {
      border-radius: 20px;
      background: #f4ebff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
    &-description__title {
      color: #101828;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
    &-description__size {
      color: #667085;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  &__info {
    display: flex;
    gap: 70px;

    color: #667085;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
}
</style>

<template>
  <div class="card">
    <div class="card-image"
         :style="{ backgroundImage: 'url(' + require('@/assets/images/' + item.image) + ')' }"></div>
    <h3 class="card-title">{{ item.title }}</h3>
    <div class="card-details">
      <span class="card-date">{{ item.date }}</span>
      <span class="card-tag">{{ item.tag }}</span>
    </div>
    <div class="card-text">{{ item.text }}</div>
    <router-link
        class="card-link"
        :to="`/new/${item.id}`"
    >read more</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 15px;
  &-image {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 176px;
    border-radius: 8px;
    @include responsive-ratio(16,9)
  }
  &-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 16px 0;
    @include mq('md', min) {
      font-size: 24px;
      line-height: 32px;
    }
  }
  &-details > span {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 14px;
    color: $color-black-20;
    margin-right: 16px;
  }
  &-text {
    margin-top: 8px;
    @include line-clamp(4);
    $break: ('sm': 6, 'md': 7);
    @each $point, $lines in $break {
      @include mq($point, min) {
        @include line-clamp($lines);
      }
    }
  }
  &-link {
    color: $color-black-80
  }
}
</style>

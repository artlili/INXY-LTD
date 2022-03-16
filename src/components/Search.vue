<template>
  <div class="search">
    <img
        :src="require('@/assets/svg/search.svg')"
        @click="opened = !opened"
    />
    <div class="search-input"
          v-if="opened">
      <input v-model="search" type="text" @input="$emit('onInput', search)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
  data () {
    return {
      search: '',
      opened: false
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  > img {
    cursor: pointer;
  }
  &-input {
    padding: 15px;
    box-shadow: 0 0 3px rgba(0,0,0,.15);
    position: absolute;
    right: 0;
    top: 32px;
    border-radius: 4px;
    width: 400px;
    max-width: 90vw;
    > input {
      width: 100%;
      border: 1px solid $color-black-40;
      padding: 6px 12px;
    }
  }
}
</style>

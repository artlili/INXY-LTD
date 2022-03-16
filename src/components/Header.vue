<template>
  <header class="header">
    <nav>
      <router-link
          to="/"
          active-class="_active"
          exact>
        <span>News</span>
      </router-link>
      <router-link
          to="/portal"
          active-class="_active">
        <span>Portal</span>
      </router-link>
    </nav>
    <app-search @onInput="$emit('onSearch', $event)"/>
  </header>
</template>

<script>
import AppSearch from '@/components/Search'
export default {
  name: 'AppHeader',
  components: {
    AppSearch
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
}
nav > a {
  display: inline-block;
  margin-right: 8px;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  > span {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
  }
  &._active {
    background: $color-black-80;
    color: $color-white;
  }
}
</style>

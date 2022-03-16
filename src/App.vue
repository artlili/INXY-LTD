<template>
  <div id="app">
    <div class="container">
      <app-header @onSearch="onSearch"/>
      <router-view :model="searchModel"/>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
export default {
  components: {
    AppHeader
  },
  data () {
    return {
      searchModel: ''
    }
  },
  methods: {
    onSearch (data) {
      this.searchModel = data
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  max-width: 90%;
  width: 1320px;
  margin: auto;
}
</style>

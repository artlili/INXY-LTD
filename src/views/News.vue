<template>
  <div class="page">
    <div class="page-title">
      <h1>Latest News</h1>
      <div>
        <span class="page-date">
          <span>{{currentDate.month}},</span>
          <span>{{currentDate.date}}</span>
        </span>
        <span
            class="page-sort"
            :class="{'_sorted': sorted}"
            @click="sorted = !sorted">
          <img :src="require('@/assets/svg/sort.svg')" />
        </span>
      </div>
    </div>
    <div class="page-main">
      <app-card
          v-for="(item, idx) in sortedItems"
          :item="item"
          :key="idx"
      ></app-card>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/Card'

export default {
  name: 'NewsView',
  components: {
    AppCard
  },
  data () {
    return {
      news: [],
      currentDate: {},
      sorted: false
    }
  },
  computed: {
    sortedItems () {
      const news = this.filteredItems
      return news.sort((a, b) => {
          return this.sorted
              ? new Date(b.date) - new Date(a.date)
              : new Date(a.date) - new Date(b.date)
      })
    },
    filteredItems () {
      const model = this.$attrs.model
      return this.news.filter((post) => {
        return post.text.toLowerCase().includes(model.toLowerCase())
      })
    }
  },
  mounted () {
    this.getCurrentDate()
    import('@/localData/news')
      .then((res) => {
        this.news = res.items
      })
      .catch((e) => console.log(e))
  },
  methods: {
    getCurrentDate () {
      const date = Date.now()
      this.currentDate.month =
          new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
      this.currentDate.date =
          new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date)
    },
  }
}
</script>

<style lang="scss" scoped>
.page {
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
  }
  &-main {
    margin: 0 -15px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    $break: ('xs': 2, 'sm': 3, 'md': 4);
    @each $point, $grid in $break {
      @include mq($point, min) {
        grid-template-columns: repeat($grid, 1fr);
      }
    }
  }
  &-date > span {
    font-family: 'Arial', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    margin-right: 8px;
    @include mq('sm', min) {
      font-size: 16px;
      line-height: 24px;
    }
    &:first-child {
      display: none;
      padding-right: 3px;
      @include mq('sm', min) {
        display: inline-block;
      }
    }

  }
  &-sort {
    position: relative;
    top: 5px;
    cursor: pointer;
    > img {
      transition: transform 0.3s;
    }
    &._sorted > img {
      transform: rotate(180deg);
    }
  }
}
</style>

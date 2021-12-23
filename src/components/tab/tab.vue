<template>
  <nav class="tabs">
    <router-link class="tab" v-for="tab in tabs" :key="tab.name" :to="tab.path">
      <span class="tabLink">
        {{ tab.name }}
      </span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      tabs: [
        {
          name: '推荐',
          path: '/recommend'
        },
        {
          name: '歌手',
          path: '/singer'
        },
        {
          name: '排行',
          path: '/top-list'
        },
        {
          name: '搜索',
          path: '/search'
        }
      ]
    }
  },

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  text-align: center;
  font-size: $font-size-medium;
  height: 44px;
  line-height: 44px;

  .tab {
    flex: 1;

    .tabLink {
      color: $color-text-l;
      padding-bottom: 5px;
    }
  }

  .router-link-active {
    .tabLink {
      color: $color-theme;
      border-bottom: 2px solid $color-theme;
    }
  }
}
</style>

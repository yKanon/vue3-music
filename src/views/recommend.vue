<template>
  <div>
    推荐
  </div>
</template>

<script>
import { getRecommend } from '@/service/recommend'

export default {
  async mounted () {
    const res = await getRecommend()
    console.log('res', res)
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>

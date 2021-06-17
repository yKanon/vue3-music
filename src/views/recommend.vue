<template>
  <section class="recommend">
    <div class="wrapper">
      <div class="content">
        <slider v-if="sliders.length > 0" :sliders="sliders"></slider>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider'

export default defineComponent({
  components: {
    Slider
  },
  data () {
    return {
      sliders: []
    }
  },
  async mounted () {
    const recommend = await getRecommend()
    this.sliders = recommend.sliders
  }
})
</script>

<style lang="scss" scoped></style>

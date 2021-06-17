import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(Slide)

export default function useSlider (wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    const sliderVal = (slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      slide: true,
      bounce: true,
      momentum: true,
      probeType: 2
    }))

    sliderVal.on(
      'slideWillChange',
      page => (currentPageIndex.value = page.pageX)
    )
  })

  onUnmounted(() => slider.value.destroy())

  return { slider, currentPageIndex }
}

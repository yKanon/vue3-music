<template>
  <div ref="rootRef" class="scroll">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useScroll from './use-scroll'

export default defineComponent({
  name: 'Scroll',
  emits: ['scroll'],
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  },

  setup(props, { emit }) {
    const rootRef = ref(null)
    const scroll = useScroll()

    return {
      scroll,
      rootRef
    }
  }
})
</script>

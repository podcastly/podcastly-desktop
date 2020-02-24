<template>
  <div ref="container" />
</template>

<script>
  import lottie from 'lottie-web'

  export default {
    name: 'PlayIcon',
    props: {
      data: {
        type: Object,
        default: () => ({ })
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      const anim = lottie.loadAnimation({
        container: this.$refs.container,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.data
      })

      this.$emit('anim', anim)
    }
  }
</script>

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
      }
    },
    mounted () {
      lottie.loadAnimation({
        container: this.$refs.container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: this.data
      })
    }
  }
</script>

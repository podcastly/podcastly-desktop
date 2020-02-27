<template>
  <div :class="{'play': play.episod}">
    <player
      v-if="!isLoading"
      class="player"
      v-bind="play"
      :style="style"
      :autoplay="autoplay"
    />
    <nav-bar/>
    <router-view/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import NavBar from '../components/NavBar'
  import Player from '../components/Player'

  export default {
    components: {NavBar, Player},
    data: () => ({
      isLoading: false,
      autoplay: false
    }),
    watch: {
      play: {
        handler (value) {
          this.isLoading = true
          this.$nextTick(() => {
            this.autoplay = true
            this.isLoading = false
          })
        }
      }
    },
    computed: {
      ...mapState('app', ['play']),
      style () {
        return {
          top: this.play.episod ? 0 : '-75px'
        }
      }
    }
  }
</script>


<style>
  .play {
    margin-top: 85px;
  }

  .player {
    padding: 10px;
    top: -75px;
    background: #fff;
    position: fixed;
    width: 100%;
    height: 75px;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.02), 0px 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.5s ease;
    z-index: 999;
  }
</style>

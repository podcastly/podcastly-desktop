<template>
  <div class="player">
    <div class="d-flex">
      <div>
        <play
          :data="play"
          class="mr-2"
          style="width: 20px"
        />
      </div>
      <div>
        <div class="subtitle">{{ episod.title }}</div>
        <sup @click="toPodcast" style="cursor: pointer">{{ podcast.author }}</sup>
      </div>
      <audio id="music" preload="all">
        <source :src="src">
      </audio>
    </div>
  </div>
</template>


<script>
  import Play from './Icons/Play'
  import play from '../assets/json/play'
  import ROUTES from '../enums/routes'

  export default {
    components: {Play},
    props: {
      podcast: {
        type: Object,
        default: () => ({})
      },
      episod: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      play
    }),
    computed: {
      src () {
        return `https://track.pdcstly.com/episod/${this.episod.id}`
      }
    },
    mounted () {
      let music = document.getElementById('music')
      music.play()
    },
    methods: {
      toPodcast () {
        this.$router.push({
          name: ROUTES.PODCASTS.VIEW,
          params: {id: this.podcast.id}
        })
      }
    }
  }
</script>

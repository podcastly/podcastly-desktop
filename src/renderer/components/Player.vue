<template>
  <div class="player">
    <div class="d-flex justify-content-between">
      <div class="mt-2" style="max-width: 400px; min-width: 400px">
        <div class="subtitle text-truncate">{{ episod.title }}</div>
        <sup @click="toPodcast" style="cursor: pointer">{{ podcast.author }}</sup>
      </div>

      <div class="flex-fill">
        <vue-plyr ref="plyr">
          <audio>
            <source :src="src">
          </audio>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>


<script>
  import ROUTES from '../enums/routes'
  import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr'
  import 'plyr/dist/plyr.css'

  export default {
    components: {VuePlyr},
    props: {
      podcast: {
        type: Object,
        default: () => ({})
      },
      episod: {
        type: Object,
        default: () => ({})
      },
      autoplay: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      if (this.autoplay) {
        this.player.play()
      }
    },
    computed: {
      player () {
        return this.$refs.plyr.player
      },
      src () {
        return `https://track.pdcstly.com/episod/${this.episod.id}`
      }
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

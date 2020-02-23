<template>
  <div class="podcasts-item" @click="onPlay">

    <div class="d-flex justify-content-start">
      <div>
        <img :src="src" :alt="data.title" width="50px" class="avatar">
      </div>
      <div class="ml-3 flex-fill pr-5">
        <div class="subtitle">{{data.title}}</div>
        <sup>{{ publishedAt }}</sup>
      </div>
      <div style="min-width: 60px">
        <div class="subtitle mr-2 d-flex justify-content-end">
          <div  v-if="isPlayed">
            <play :data="playJson" style="width: 20px"/>
          </div>
          <div class="text-right ml-2">
            {{ duration.hours }}:{{ duration.minutes }}
          </div>
        </div>
      </div>
    </div>

    <p v-if="showDescription" class="mt-3" v-html="data.description"/>
  </div>
</template>

<script>
  import moment from 'moment'
  import {mapState} from 'vuex'
  import Play from '../../../components/Icons/Play'
  import playJson from '../../../assets/json/play'

  export default {
    name: 'PodcastsListItem',
    components: {Play},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      showDescription: false,
      playJson
    }),
    computed: {
      ...mapState('podcasts', ['single']),
      ...mapState('app', ['play']),
      isPlayed () {
        if (!this.play.episod) return false
        return this.data.id === this.play.episod.id
      },
      src () {
        const {id} = this.data
        const avatar = this.data.avatar ? `episod/${id}` : `podcast/${this.single.id}`
        return `https://image.pdcstly.com/${avatar}/128.jpg`
      },
      publishedAt () {
        const {published} = this.data
        return moment(published).fromNow()
      },
      duration () {
        const {duration} = this.data
        const hours = Math.floor(duration / 3600)
        const minutes = Math.floor(duration / 60) - hours * 60

        return {
          hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes
        }
      }
    },
    methods: {
      onPlay () {
        this.$store.commit('app/SET_PLAY', {
          podcast: this.single,
          episod: this.data
        })
      }
    }
  }
</script>


<style lang="scss">
  .podcasts-item {
    cursor: pointer;
    background: #FFFFFF;
    border-radius: 6px;
    margin: 10px;
    padding: 15px 10px;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.02), 0px 4px 20px rgba(0, 0, 0, 0.05);

    .avatar {
      border-radius: 50%;
    }
  }
</style>

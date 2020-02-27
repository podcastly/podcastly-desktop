<template>
  <div class="episod-item" :class="{played: isPlayed}">

    <div class="d-flex justify-content-start">
      <div>
        <img :src="src" :alt="data.title" width="50px" class="avatar">
      </div>
      <div class="ml-3 flex-fill pr-5">
        <div class="subtitle">{{data.title}}</div>
        <sup>{{ publishedAt }}</sup>

        <div @click="toggleComments">Comments</div>


        <episodes-comments-list
          v-if="showComments"
          :data="data"
          class="mt-3"
        />

      </div>
      <div style="min-width: 180px" class="text-right">
        <div class="subtitle mr-2 d-flex justify-content-end">
          <div v-if="isPlayed">
            <icon :data="soundJson" style="width: 20px" autoplay/>
          </div>
          <div v-else @click="onPlay">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13.5" cy="13.5" r="13.5" fill="#F5F7F9"/>
              <path d="M18 14L10.5 18.3301L10.5 9.66987L18 14Z" fill="#CDCFD6"/>
            </svg>
          </div>

          <div class="text-right ml-2">
            {{ duration.hours }}:{{ duration.minutes }}
          </div>
        </div>
        <reactions
          :data="data"
          class="mt-3"
        />
      </div>
    </div>

    <p v-if="showDescription" class="mt-3" v-html="data.description"/>
  </div>
</template>

<script>
  import moment from 'moment'
  import {mapState} from 'vuex'
  import Icon from '../../../components/Icon'
  import soundJson from '../../../assets/json/sound'
  import Reactions from '../../../components/Reactions'
  import EpisodesCommentsList from './EpisodesCommentsList'

  export default {
    name: 'EpisodesListItem',
    components: {Icon, Reactions, EpisodesCommentsList},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      showDescription: false,
      showComments: false,
      soundJson
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
      toggleComments () {
        this.showComments = !this.showComments
      },
      onPlay () {
        this.$store.commit('app/setPlay', {
          podcast: this.single,
          episod: this.data
        })
      }
    }
  }
</script>


<style lang="scss">
  .episod-item {
    cursor: pointer;
    background: #FFFFFF;
    border-radius: 6px;
    margin: 10px;
    padding: 15px 10px;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.02), 0px 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    transition: all 0.3s ease;

    &.played {
      border: 1px solid #B5E24F;
    }

    .avatar {
      border-radius: 50%;
    }
  }
</style>

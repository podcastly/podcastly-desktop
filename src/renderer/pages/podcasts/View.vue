<template>
  <div v-if="isLoaded">
    <div>
      <div class="d-flex pt-4 pb-3 pl-3" :style="style">
        <div>
          <h1>{{ single.title }}</h1>
        </div>
        <div>
          {{ single.language }}
        </div>
      </div>


      <div class="mx-3 mt-3">
        <p>{{ single.description }}</p>
        <div class="d-flex">
          <div class="mr-5">
            Rating:
            <h1>{{ single.rating }}</h1>
          </div>
          <div class="mr-5">
            Episodes:
            <h1>{{ single.counters.episods }}</h1>
          </div>
          <div class="mr-5">
            Likes:
            <h1>{{ single.counters.likes }}</h1>
          </div>
          <div class="mr-5">
            Subscribers:
            <h1>{{ single.counters.subscribers }}</h1>
          </div>
          <div class="mr-5">
            Comments:
            <h1>{{ single.counters.comments }}</h1>
          </div>
        </div>
      </div>

      <podcasts-list
        :data="episodes"
      />

    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import NavBar from '../../components/NavBar'
  import PodcastsList from './components/PodcastsList'

  export default {
    name: 'PodcastView',
    components: {PodcastsList, NavBar},
    props: {
      id: {
        type: String,
        default: null
      }
    },
    data: () => ({
      isLoaded: false
    }),
    async created () {
      try {
        const {id} = this
        await Promise.all([
          this.getSingle({id}),
          this.getEpisodes({id})
        ])

        this.isLoaded = true
      } catch (e) {
        console.log(e)
      }
    },
    computed: {
      ...mapState('podcasts', ['single', 'episodes']),
      style () {
        const {vibrant} = this.single.styles
        return {
          backgroundColor: vibrant
        }
      }
    },
    methods: {
      ...mapActions('podcasts', ['getSingle', 'getEpisodes'])
    }
  }
</script>
<template>
  <div>
    <template v-if="query">
      <search-list :query="query" />
    </template>
    <template v-else>
      <explorer-collections
        v-for="collection in collections"
        :key="collection.id"
        :data="collection"
      />
      <explorer-podcasts
        v-for="podcast in podcasts"
        :key="podcast.id"
        :data="podcast"
        class="mt-3"
      />
    </template>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import ExplorerCollections from '../components/Explorer/ExplorerCollections'
  import ExplorerPodcasts from '../components/Explorer/ExplorerPodcasts'
  import SearchList from '../components/SearchList'

  export default {
    name: 'WelcomePage',
    components: {ExplorerCollections, ExplorerPodcasts, SearchList},
    computed: {
      ...mapGetters('explorer', ['collections', 'podcasts']),
      ...mapState('search', ['query'])
    }
  }
</script>

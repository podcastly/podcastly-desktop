<template>
  <div>
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ExplorerCollections from '../components/Explorer/ExplorerCollections'
  import ExplorerPodcasts from '../components/Explorer/ExplorerPodcasts'
  export default {
    components: {ExplorerCollections, ExplorerPodcasts},
    computed: {
      ...mapGetters('explorer', ['collections', 'podcasts'])
    }
  }
</script>

<template>
  <div v-if="collection">
    <div class="px-3">
      <h4 class="title">{{ collection.title }}</h4>
      <p>{{ collection.tagline }}</p>
    </div>
    <div v-if="!isLoading" class="d-flex flex-wrap px-3">
      <explorer-podcasts-item
        v-for="item in single"
        :key="item.id"
        :data="item"
        class="mb-3"
      />
    </div>
  </div>
</template>

<script>
  import Api from '../api'
  import {mapState, mapActions} from 'vuex'
  import ExplorerPodcastsItem from '../components/Explorer/ExplorerPodcastsItem'

  export default {
    name: 'AccountPage',
    components: {
      ExplorerPodcastsItem
    },
    props: {
      id: {
        type: String,
        default: null
      }
    },
    data: () => ({
      isLoading: true,
      collection: null
    }),
    async created () {
      try {
        this.isLoading = true
        await Promise.all([
          this.getCollectionItems(this.id),
          this.getCollection()
        ])
      } finally {
        this.isLoading = false
      }
    },
    computed: {
      ...mapState('explorer', ['single'])
    },
    methods: {
      ...mapActions('explorer', ['getCollectionItems']),
      async getCollection () {
        try {
          const {data} = await Api.Exporer.getCollection(this.id)
          this.collection = data
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

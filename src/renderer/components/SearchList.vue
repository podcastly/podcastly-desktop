<template>
  <div>
    <h4 class="my-3 mx-3 title">
      Search
      <sup v-if="list.length">{{ list.length }}</sup>
    </h4>

    <div class="d-flex flex-wrap search-list px-3 py-3">
      <template v-if="isLoading">... Loading</template>
      <template v-else>
        <template v-if="list.length">
          <search-list-item
            v-for="podcast in list"
            :data="podcast"
            :key="podcast.id"
            class="mr-3 mb-3"
          />
        </template>
        <div v-else>
          No results were found for
          <strong>{{ data.query }}</strong>.
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import SearchListItem from './SearchListItem'

  export default {
    name: 'SearchList',
    components: {SearchListItem},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      isLoading: false
    }),
    watch: {
      data: {
        immediate: true,
        handler (value) {
          if (value) {
            const {query} = value
            this.search(query)
          }
        }
      }
    },
    computed: {
      ...mapState('app', ['list'])
    },
    methods: {
      ...mapActions('app', ['getSearch']),
      async search (query) {
        try {
          this.isLoading = true
          this.getSearch(query)
        } finally {
          this.isLoading = false
        }
      }
    }
  }
</script>

<style>
  .search-list {
    background: #F8F9FB;
  }
</style>

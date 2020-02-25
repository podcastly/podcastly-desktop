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
          <strong>{{ query }}</strong>.
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
      query: {
        type: String,
        default: null
      }
    },
    data: () => ({
      isLoading: false
    }),
    watch: {
      query: {
        immediate: true,
        handler (value) {
          if (value) {
            this.search(value)
          }
        }
      }
    },
    computed: {
      ...mapState('search', ['list'])
    },
    methods: {
      ...mapActions('search', ['getList']),
      async search (query) {
        try {
          this.isLoading = true
          this.getList(query)
        } finally {
          this.isLoading = false
        }
      }
    }
  }
</script>


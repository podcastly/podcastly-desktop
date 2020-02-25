<template>
  <div class="d-flex justify-content-sm-between align-items-center my-3">
    <div>
      <div class="nav">
        <a class="nav-link" @click="toExplorer" href="#">Explorer</a>
        <a class="nav-link" @click="toCategories">Categories</a>
        <a class="nav-link" @click="toSubscriptions" href="#">
          Subscriptions
          <sup v-if="count > 0">{{ count }}</sup>
        </a>
      </div>
    </div>
    <div class="mr-3">
      <input
        v-model="query"
        type="text"
        class="form-control"
        id="search"
        placeholder="Search"
      >
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import ROUTES from '../enums/routes'

  export default {
    name: 'NavBar',
    data: () => ({
      query: null
    }),
    watch: {
      query: {
        handler (value) {
          if (value) {
            if (!this.isWelcome) {
              this.$router.push({
                name: ROUTES.WELCOME
              })
            }
            this.setQuery(value)
          } else {
            this.reset()
          }
        }
      }
    },
    computed: {
      isWelcome () {
        return this.$route.name === ROUTES.WELCOME
      },
      ...mapState('subscriptions', {count: (state) => state.list.length})
    },
    methods: {
      ...mapMutations('search', ['setQuery']),
      reset () {
        this.query = null
        this.setQuery()
      },
      toSubscriptions () {
        this.reset()
        this.$router.push({
          name: ROUTES.FAVORITES
        })
      },
      toExplorer () {
        this.reset()
        this.$router.push({
          name: ROUTES.WELCOME
        })
      },
      toCategories () {
        this.reset()
        this.$router.push({
          name: ROUTES.CATEGORIES
        })
      }
    }
  }
</script>

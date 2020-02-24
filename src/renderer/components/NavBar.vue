<template>
  <div class="d-flex justify-content-sm-between align-items-center my-3">
    <div>
      <div class="nav">
        <a class="nav-link" @click="toExplorer" href="#">Explorer</a>
        <router-link tag="a" class="nav-link" to="/categories">Categories</router-link>
        <a class="nav-link" @click="toFavorites" href="#">Favorites</a>
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
  import {mapMutations} from 'vuex'
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
            const {name} = this.$route
            this.setSearch({
              page: name,
              query: value
            })
          } else {
            this.resetSearch()
          }
        }
      }
    },
    methods: {
      ...mapMutations('app', ['setSearch']),
      resetSearch () {
        this.query = null
        this.setSearch()
      },
      toFavorites () {
        this.resetSearch()
        this.$router.push({
          name: ROUTES.FAVORITES
        })
      },
      toExplorer () {
        this.resetSearch()
        this.$router.push({
          name: ROUTES.WELCOME
        })
      }
    }
  }
</script>

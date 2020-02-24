<template>
  <div class="d-flex justify-content-sm-between align-items-center mb-3">
    <div>
      <div class="nav mb-2">
        <router-link tag="a" class="nav-link" to="/">Explorer</router-link>
        <router-link tag="a" class="nav-link" to="/categories">Categories</router-link>
        <a class="nav-link" @click="toFavorites" href="#">Favorites</a>
      </div>
    </div>
    <div class="mr-3">
      <input type="text" class="form-control" id="search" placeholder="Search">
    </div>
  </div>
</template>

<script>
  import ROUTES from '../enums/routes'

  export default {
    name: 'NavBar',
    methods: {
      toFavorites () {
        this.$router.push({
          name: ROUTES.FAVORITES
        })
      }
    }
  }
</script>

<template>
  <div>
    <h4 class="title mx-3">Favorites</h4>
    <div class="nav">
      <a class="nav-link" @click="setType('podcast')" href="#">Podcasts</a>
      <a class="nav-link" @click="setType('episod')" href="#">Episods</a>
    </div>

    <div>
      {{ list }}
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'FavoritesPage',
    data: () => ({
      type: 'podcasts'
    }),
    computed: {
      ...mapState('favorites', ['list'])
    },
    methods: {
      setType (type) {
        this.type = type
      }
    }
  }
</script>

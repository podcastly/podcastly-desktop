<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'Podcastly',
    data: () => ({
      isLoaded: false
    }),
    async created () {
      try {
        await Promise.all([
          this.getExplorerList(),
          this.getRegionsList()
        ])
        this.isLoaded = true
      } catch (e) {
        console.log(e)
      }
    },
    methods: {
      ...mapActions('explorer', {getExplorerList: 'getList'}),
      ...mapActions('regions', {getRegionsList: 'getList'})
    }
  }
</script>

<style>
  /* CSS */
</style>

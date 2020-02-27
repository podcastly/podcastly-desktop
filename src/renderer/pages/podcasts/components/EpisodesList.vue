<template>
  <div class="podcasts-list">
    <episodes-list-item
      v-for="episod in data"
      :key="episod.id"
      :data="episod"
    />
  </div>
</template>

<script>
  import EpisodesListItem from './EpisodesListItem'
  export default {
    name: 'PodcastsList',
    components: {EpisodesListItem},
    props: {
      data: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style>
  .podcasts-list {
    background: #F8F9FB;
  }
</style>

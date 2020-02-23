<template>
  <div class="podcasts-list">
    <podcasts-list-item
      v-for="episod in data"
      :key="episod.id"
      :data="episod"
    />
  </div>
</template>

<script>
  import PodcastsListItem from './PodcastsListItem'
  export default {
    name: 'PodcastsList',
    components: {PodcastsListItem},
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

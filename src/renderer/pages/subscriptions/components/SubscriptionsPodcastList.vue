<template>
  <div class="podcasts-list d-flex flex-wrap px-3 py-3">
    <subscriptions-podcast-list-item
      v-for="item in data"
      :data="item"
      :key="item.id"
      class="mr-3 mb-3"
    />
  </div>
</template>

<script>
  import SubscriptionsPodcastListItem from './SubscriptionsPodcastListItem'
  export default {
    components: { SubscriptionsPodcastListItem },
    props: {
      data: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>


<style>
  .search-list {
    background: #F8F9FB;
  }
</style>

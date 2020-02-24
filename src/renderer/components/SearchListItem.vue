<template>
  <div>
    <explorer-collections-item :data="data" />
  </div>
</template>

<script>
  import ExplorerCollectionsItem from './Explorer/ExplorerPodcastsItem'

  export default {
    name: 'SearchListItem',
    components: {ExplorerCollectionsItem},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

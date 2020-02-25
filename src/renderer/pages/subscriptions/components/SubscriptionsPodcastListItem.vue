<template>
  <div>
    <explorer-podcasts-item :data="data" />
  </div>
</template>

<script>
  import ExplorerPodcastsItem from '../../../components/Explorer/ExplorerPodcastsItem'

  export default {
    name: 'SearchListItem',
    components: {ExplorerPodcastsItem},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

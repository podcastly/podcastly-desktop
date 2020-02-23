<template>
  <div>
    <h4 class="my-3 mx-3 title" v-if="data.title">{{ data.title }}</h4>
    <div class="podcasts px-3 py-3">
      <explorer-podcasts-item
        v-for="item in data.items"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
  import ExplorerPodcastsItem from './ExplorerPodcastsItem'
  export default {
    name: 'ExplorerPodcasts',
    components: {ExplorerPodcastsItem},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="scss">
  .podcasts {
    display: flex;
    overflow-x: scroll;
    background: #F8F9FB;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>

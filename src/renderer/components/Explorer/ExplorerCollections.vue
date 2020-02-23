<template>
  <div>
    <h4 class="my-3 mx-3 title" v-if="data.title">{{ data.title }}</h4>

    <div class="collections px-3 py-3">
      <explorer-collections-item
        v-for="item in data.items"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
  import ExplorerCollectionsItem from './ExplorerCollectionsItem'
  export default {
    name: 'ExplorerCollections',
    components: {ExplorerCollectionsItem},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="scss">
  .collections {
    display: flex;
    overflow-x: scroll;
    background: #F8F9FB;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>

<template>
  <div class="collection-item" @click="toCollection">
    <h6 class="subtitle">{{ data.title }}</h6>
    <p>{{ data.tagline }}</p>
  </div>
</template>

<script>
  import ROUTES from '../../enums/routes'

  export default {
    name: 'ExplorerCollectionsItem',
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      toCollection () {
        this.$router.push({
          name: ROUTES.COLLECTION,
          params: { id: this.data.id }
        })
      }
    }
  }
</script>


<style lang="scss">
  .collection-item {
    min-width: 300px;
    padding: 15px 10px;
    border-radius: 6px;
    border: 1px solid #ffffff;
    margin-right: 20px;
    background: #ffffff;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
</style>

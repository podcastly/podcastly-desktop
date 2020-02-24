<template>
  <div class="podcast-item" @click="toPodcast">
    <img class="poster" :src="src" width="200px"/>
    <div class="content">
      <h6 class="text-truncate">{{ data.title }}</h6>
      <p>{{ data.tagline }}</p>
    </div>
  </div>
</template>

<script>
  import ROUTES from '../../enums/routes'

  export default {
    name: 'ExplorerCollectionsItem',
    props: {
      id: {
        type: String,
        default: null
      },
      data: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      style () {
        const {id} = this.data
        return {
          background: `url(https://image.pdcstly.com/podcast/${id}/256.jpg)`
        }
      },
      src () {
        const {id} = this.data
        return `https://image.pdcstly.com/podcast/${id}/256.jpg`
      }
    },
    methods: {
      toPodcast () {
        console.log('toPodcast')
        this.$router.push({
          name: ROUTES.PODCASTS.VIEW,
          params: {
            id: this.data.id
          }
        })
      }
    }
  }
</script>


<style lang="scss">
  .podcast-item {
    border-radius: 6px;
    border: 1px solid #ffffff;
    margin-right: 20px;
    background: #ffffff;
    cursor: pointer;
    max-width: 200px;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.02), 0px 4px 20px rgba(0, 0, 0, 0.05);

    .poster {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    .content {
      margin-top: 10px;
      padding: 0px 10px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
</style>

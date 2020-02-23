<template>
  <div class="podcast-item" @click="toPodcast">
    <img class="poster" :src="src" width="200px"/>
    <div class="content">
      <h6>{{ data.title }}</h6>
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

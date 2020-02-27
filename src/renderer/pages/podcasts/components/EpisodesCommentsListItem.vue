<template>
  <div class="episodes-comments-list-item">

    <div class="d-flex justify-content-start align-items-center">
      <div>
        <div class="avatar"></div>
      </div>
      <div class="ml-2">
        <div class="subtitle" style="font-size: 14px">{{ data.user.name }}</div>
        <div class="date">
          {{ publishedAt }}
        </div>
      </div>
    </div>


    <div class="mt-1 mb-2">{{ data.text }}</div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'EpisodesCommentsListItem',
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      publishedAt () {
        const {published} = this.data
        return moment(published).fromNow()
      }
    }
  }
</script>


<style lang="scss">
  .episodes-comments-list-item {
    padding: 5px 10px;
    background: #F8F9FB;
    border-radius: 4px;

    .avatar {
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 30px;
    }

    .date {
      font-size: 13px;
    }
  }
</style>

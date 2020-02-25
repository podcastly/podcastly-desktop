<template>
  <div>
    <h4 class="title mx-3">Subscriptions</h4>
    <subscriptions-podcast-list :data="podcasts" />
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import SubscriptionsPodcastList from './components/SubscriptionsPodcastList'

  export default {
    name: 'SubscriptionsPage',
    components: {SubscriptionsPodcastList},
    data: () => ({
      podcasts: []
    }),
    computed: {
      ...mapState('subscriptions', ['list'])
    },
    created () {
      this.getPodcasts()
    },
    methods: {
      ...mapActions('podcasts', ['getSingle']),
      async getPodcasts () {
        const ids = this.list.filter(l => l.type === 'podcast').map(l => l.id)
        for (const id of ids) {
          const podcast = await this.getSingle(id)
          this.podcasts.push(podcast)
        }
      }
    }
  }
</script>

<style>
  .podcasts-list {
    background: #F8F9FB;
  }
</style>

<template>
  <div>
    <h4 class="title mx-3">Subscriptions</h4>
    <subscriptions-podcast-list
      v-if="list.length"
      :data="list"
    />
    <div class="px-3" v-else>
      No subscriptions
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import SubscriptionsPodcastList from './components/SubscriptionsPodcastList'

  export default {
    name: 'SubscriptionsPage',
    components: {SubscriptionsPodcastList},
    computed: {
      ...mapState('subscriptions', ['list'])
    },
    created () {
      this.getList()
    },
    methods: {
      ...mapActions('subscriptions', ['getList'])
    }
  }
</script>

<style>
  .podcasts-list {
    background: #F8F9FB;
  }
</style>

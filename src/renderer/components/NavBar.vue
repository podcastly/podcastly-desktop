<template>
  <div class="d-flex justify-content-sm-between align-items-center my-3">
    <div class="flex-fill">
      <div class="nav">
        <a class="nav-link" @click="toExplorer" href="#">Explorer</a>
        <a class="nav-link" @click="toSubscriptions" href="#">
          Subscriptions
          <sup v-if="count > 0">{{ count }}</sup>
        </a>
      </div>
    </div>
    <div class="mr-3 text-right">
      <input
        v-model="query"
        type="text"
        class="form-control"
        id="search"
        placeholder="Search"
      >
    </div>

    <div class="mr-3">
      <template v-if="account">
        <a href="#" @click="toAccount">{{ account.name }}</a>
      </template>
      <template v-else>
        <a class="nav-link" href="#" @click="showAuth = true">Auth</a>
      </template>
    </div>
    <div style="z-index: 9999;">
      <transition name="srcoll-up">
        <auth
          v-if="showAuth"
          @success="onSuccess"
        />
      </transition>
    </div>
    <div v-if="showAuth" class="overlay" :style="overlayStyle" @click="showAuth = false"></div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import ROUTES from '../enums/routes'
  import Auth from './Auth/Auth'
  import {remote} from 'electron'

  export default {
    name: 'NavBar',
    components: { Auth },
    data: () => ({
      query: null,
      showAuth: false
    }),
    watch: {
      query: {
        handler (value) {
          if (value) {
            if (!this.isWelcome) {
              this.$router.push({
                name: ROUTES.WELCOME
              })
            }
            this.setQuery(value)
          } else {
            this.reset()
          }
        }
      }
    },
    computed: {
      overlayStyle () {
        const [width, height] = remote.getCurrentWindow().getSize()
        return {
          width: `${width}px`,
          height: `${height * 2}px`
        }
      },
      isWelcome () {
        return this.$route.name === ROUTES.WELCOME
      },
      ...mapState('app', ['account']),
      ...mapState('subscriptions', {count: (state) => state.list.length})
    },
    methods: {
      ...mapMutations('search', ['setQuery']),
      reset () {
        this.query = null
        this.setQuery()
      },
      toSubscriptions () {
        this.reset()
        this.$router.push({
          name: ROUTES.FAVORITES
        })
      },
      toExplorer () {
        this.reset()
        this.$router.push({
          name: ROUTES.WELCOME
        })
      },
      toAccount () {
        this.reset()
        this.$router.push({
          name: ROUTES.ACCOUNT
        })
      },
      onSuccess () {
        this.showAuth = false
      }
    }
  }
</script>

<style>
  .overlay {
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
  }

  .srcoll-up-enter-active {
    top: -400px;
  }

  .srcoll-up-leave-active {
    top: -10px;
  }

</style>

<template>
  <div class="reactions">
    <div class="d-flex align-items-center">
      <div v-if="data.reactions.likes > 0" class="mr-2">
        <div @click="onReaction('👍')">
          👍
          <span class="counter">
            {{ data.reactions.likes }}
          </span>
        </div>
      </div>

      <div v-if="data.reactions.hearts > 0">
        <div @click="onReaction('❤️')">
          ❤️
          <span class="counter">
            {{ data.reactions.hearts }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapState, mapActions} from 'vuex'

  const REACTIONS = ['', '️']

  export default {
    name: 'Reactions',
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      width: '30px'
    }),
    computed: {
      ...mapState('app', ['account']),
      reactions () {
        return REACTIONS
      },
      style () {
        return {
          width: this.width
        }
      }
    },
    methods: {
      ...mapActions('reactions', ['react', 'unreact']),
      onReaction (reaction) {
        const {id} = this.data
        this.react({id, reaction})
      }
    }
  }
</script>


<style lang="scss">
  .reactions {
    display: inline-block;
    text-align: left;
    padding-top: 3px;
    padding-left: 7px;
    height: 30px;
    border-radius: 30px;
    transition: all 0.3s ease;

    .counter {
      font-size: 13px;
      padding-left: 3px;
    }
  }
</style>

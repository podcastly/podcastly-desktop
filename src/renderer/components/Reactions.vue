<template>
  <div class="section">
    <div class="d-flex align-items-center">
      <div v-if="data.reactions.likes > 0" class="mr-2 reaction" :class="{ reacted: isReacted('👍') }">
        <div @click="onReaction('👍')">
          👍
          <span class="counter">
            {{ data.reactions.likes }}
          </span>
        </div>
      </div>
      <div v-if="data.reactions.hearts > 0" class="reaction" :class="{ reacted: isReacted('❤️') }">
        <div @click="onReaction('❤️')">
          ❤️
          <span class="counter">
            {{ data.reactions.hearts }}
          </span>
        </div>
      </div>


      <div class="reactions" :style="reactionStyles" >
        <div class="d-flex flex-nowrap justify-content-end align-items-center">
          <div @click="onReaction('👍')">
            <span class="pl-2 pr-1">👍</span>
          </div>
          <div @click="onReaction('❤️')">
            <span class="pr-1">❤️</span>
          </div>
          <div @click="toggleReactionsList">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="7" width="2" height="12" rx="1" fill="#CDCFD6"/>
              <rect x="19" y="12" width="2" height="12" rx="1" transform="rotate(90 19 12)" fill="#CDCFD6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Reactions',
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      showReactions: false
    }),
    computed: {
      ...mapState('podcasts', ['reactions']),
      ...mapState('app', ['account']),
      reactionStyles () {
        return {
          width: this.showReactions ? '78px' : '26px'
        }
      }
    },
    methods: {
      ...mapActions('reactions', ['react', 'unreact']),
      ...mapActions('podcasts', ['getReactions']),
      toggleReactionsList () {
        this.showReactions = !this.showReactions
      },
      async onReaction (reaction) {
        const {id} = this.data
        await this.react({id, reaction})
        await this.getReactions(this.data.pid)

        this.toggleReactionsList()
      },
      isReacted (value) {
        const reaction = this.reactions[this.data.id]
        return value === reaction
      }
    }
  }
</script>


<style lang="scss" scoped>
  .section {
    display: inline-block;
    text-align: left;
    padding-top: 3px;
    padding-left: 7px;
    height: 30px;
    border-radius: 30px;

    .reactions {
      overflow: hidden;
      height: 26px;
      transition: all 0.3s ease;
      background: #F8F9FB;
      border-radius: 26px;
    }

    .reaction {
      padding: 3px 10px;

      &.reacted {
        background: #F8F9FB;
        border-radius: 30px;
      }
    }

    .counter {
      font-size: 13px;
      padding-left: 3px;
    }
  }
</style>

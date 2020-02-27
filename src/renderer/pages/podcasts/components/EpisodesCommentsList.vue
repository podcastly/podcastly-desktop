<template>
  <div v-if="!isLoading" class="episodes-comments-list">
    <transition-group
      name="list"
      tag="div"
      appear>
      <episodes-comments-list-item
        v-for="comment in comments"
        :data="comment"
        :key="comment.id"
        class="mb-2"
      />
    </transition-group>

    <textarea v-model="form.text" class="form-control">

    </textarea>
    <button
      @click="onPost"
      type="button"
      class="btn btn-warning mt-2"
    >
      Post
    </button>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import EpisodesCommentsListItem from './EpisodesCommentsListItem'

  export default {
    name: 'EpisodesCommentsList',
    components: {EpisodesCommentsListItem},
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        isLoading: true,
        form: {
          tid: this.data.id,
          type: 'episod',
          text: null
        }
      }
    },
    async mounted () {
      const {id} = this.data
      await this.getList(id)
      this.isLoading = false
    },
    computed: {
      comments () {
        return this.$store.getters['comments/list'](this.data.id)
      }
    },
    methods: {
      ...mapActions('comments', ['getList', 'create']),
      async onPost () {
        try {
          const {id} = this.data
          await this.create(this.form)
          await this.getList(id)
          this.form.text = null
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style>
  .list-enter-active, .list-leave-active {
    transition: all 0.3s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>

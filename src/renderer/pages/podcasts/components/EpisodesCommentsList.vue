<template>
  <div class="episodes-comments-list">
    <transition-group
      name="list"
      tag="div"
      appear>
      <episodes-comments-list-item
        v-for="comment in list"
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
  import {mapState, mapActions} from 'vuex'
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
        form: {
          tid: this.data.id,
          type: 'episod',
          text: null
        }
      }
    },
    created () {
      const {id} = this.data
      this.getList(id)
    },
    computed: {
      ...mapState('comments', ['list'])
    },
    methods: {
      ...mapActions('comments', ['getList', 'create']),
      async onPost () {
        try {
          const {id} = this.data

          await this.create(this.form)
          await this.getList(id)
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

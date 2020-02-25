<template>
  <div>
    <h4 class="title px-3">Account</h4>
    <div class="px-3">
      {{ account }}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AccountPage',
    computed: {
      ...mapState('app', ['account'])
    }
  }
</script>

<template>
  <div class="px-3">
    <div class="mt-3">
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error.message }}
      </div>

      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="form.name" type="name" class="form-control" id="name">
      </div>

      <div class="form-group">
        <label for="login">Email address</label>
        <input v-model="form.email" type="email" class="form-control" id="login">
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="form.password" type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary" @click="onSignup">Submit</button>
  </div>
</template>


<script>
  export default {
    name: 'Auth',
    data: () => ({
      error: null,
      form: {
        platform: 'desktop',
        name: null,
        email: null,
        password: null
      }
    }),
    methods: {
      async onSignup () {
        this.$emit('submit', this.form)
      }
    }
  }
</script>

<style>
  .overflow {
    overflow: hidden;
  }

  .auth {
    top: -10px;
    left: 100px;
    min-width: 600px;
    min-height: 350px;
    padding-bottom: 20px;
    background: #fff;
    position: fixed;
    border-radius: 6px;
    z-index: 1000;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.02), 0px 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

</style>

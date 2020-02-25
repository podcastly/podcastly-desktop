<template>
  <div class="px-3">
    <div class="mt-3">
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error.message }}
      </div>

      <div class="form-group">
        <label for="email">Email address</label>
        <input v-model="form.login" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="form.password" type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary" @click="onLogin">Submit</button>
  </div>
</template>


<script>
  import os from 'os'
  import md5Hex from 'md5-hex'
  const deviceName = os.hostname().substr(0, 64)

  export const defaultFormData = () => ({
    platform: 'desktop',
    grantType: 'credentials',
    deviceName,
    deviceId: md5Hex(deviceName),
    login: null,
    password: null
  })

  export default {
    name: 'AuthLogin',
    data: () => ({
      error: null,
      form: defaultFormData
    }),
    methods: {
      async onLogin () {
        this.$emit('submit', this.form)
      }
    }
  }
</script>

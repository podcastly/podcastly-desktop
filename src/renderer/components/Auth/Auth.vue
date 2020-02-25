<template>
  <div class="auth">
    <div class="px-3">
      <ul class="nav nav-tabs mt-4">
        <li class="nav-item">
          <a class="nav-link" :class="{active: isLogin }" @click="setTab('login')" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active: isSignup }" @click="setTab('signup')" href="#">Sign Up</a>
        </li>
      </ul>
      <auth-login v-if="isLogin" @submit="onLogin"/>
      <auth-signup v-if="isSignup" @submit="onSignup"/>
    </div>
  </div>
</template>


<script>
  import { mapMutations } from 'vuex'
  import Api from '../../api'
  import AuthLogin, {defaultFormData} from './AuthLogin'
  import AuthSignup from './AuthSignup'

  export default {
    name: 'Auth',
    components: {AuthLogin, AuthSignup},
    data: () => ({
      error: null,
      tab: 'login'
    }),
    mounted () {
      document.body.classList.toggle('overflow', true)
    },
    computed: {
      isLogin () {
        return this.tab === 'login'
      },
      isSignup () {
        return this.tab === 'signup'
      }
    },
    methods: {
      ...mapMutations('app', ['setAccount', 'setTokens']),
      setTab (type) {
        this.tab = type
      },
      async onLogin (body) {
        try {
          const { data } = await Api.Auth.getToken(body)
          const {token, refreshToken, account} = data
          this.setAccount(account)
          this.setTokens({
            token,
            refreshToken
          })
        } catch (e) {
          const {data} = e.response
          this.error = data.error
        }
      },
      async onSignup (body) {
        try {
          await Api.Auth.signup(body)
          const form = {
            ...defaultFormData(),
            login: body.email,
            password: body.password
          }
          await this.onLogin(form)
          this.$emit('success')
        } catch (e) {
          const {data} = e.response
          this.error = data.error
        }
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

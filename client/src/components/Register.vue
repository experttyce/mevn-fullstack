<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"><br>
    <input type="password" name="password" v-model="password" placeholder="password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '132'
    }
  },
  methods: {
    async register () {
      const result = await AuthenticationService.register({ email: this.email, password: this.password })
      console.log(result)
    }

  }
}
</script>

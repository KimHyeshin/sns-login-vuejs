<template>
  <div>
    Login
    <button @click="login">Login</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {}
    },
    methods: {
      ...mapMutations({
        setAuthentication: 'setAuthentication'
      }),
      login() {
        this.setAuthentication(true);
        this.$router.replace(this.$route.query.redirect || '/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/public">Public</router-link>
      <router-link to="/secure">Secure</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name : 'TopNav'
  }
</script>

<style scoped>
  a {
    margin-right: 10px;
  }
  a.router-link-exact-active {
    background: lightblue;
  }
</style>

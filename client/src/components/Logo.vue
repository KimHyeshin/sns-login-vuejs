<template>
  <div>
    <img :src="logoUrl" alt="Logo">
  </div>
</template>

<script>
  export default {
    name : 'Logo',
    data() {
      return {
        logoUrl : require('@/assets/images/logo.png')
      }
    }
  }
</script>

<style>

</style>

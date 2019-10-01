<template>
  <div>
    Secure
  </div>
</template>

<script>
export default {
  name: 'Secure',
  data () {
    return {
    }
  },
  mounted() {
    console.log(this.$route.matched);
    console.log(this.$route.params);
    console.log(this.$route.query);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

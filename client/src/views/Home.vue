<template>
  <div>
    <Logo/>
    <h1>Home</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  const Logo = () => import('@/components/Logo.vue');

  export default {
    name : 'Home',
    components : {
      Logo
    },
    mounted() {
      console.log(this.CONSTANTS);
      console.log(this.getConstantDefault);
    },
    computed: {
      ...mapGetters([
        'CONSTANTS',
        'getConstantDefault'
      ])
    },
    methods: {
      // ...mapMutations({
      //   addValue: 'addValue'
      // }),
      // Mutations 를 이용할 때
      // addValue() {
      //   this.$store.commit('addValue');
      // }
      //
      // ...mapActions({
      //   addValueDelay: 'addValue'
      // }),
      // Actions 를 이용할 때
      // addValueDelay() {
      //   this.$store.dispatch('addValue');
      // }
    }
  }
</script>

<style scoped>
  button {
    line-height: 20px;
    margin: 0 5px;
  }

</style>

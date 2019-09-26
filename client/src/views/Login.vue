<template>
  <div>
    Login
    <div v-if="getAuth">
      isLogin is true!!
      <div>
        <div>Type : {{loginInfo.type}}</div>
        <div>ID : {{loginInfo.id}}</div>
      </div>
    </div>
    <div v-else>
<!--      <p><button @click="login">Login (Vuex 테스트)</button></p>-->
      <p><button @click="login"><img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></button></p>
<!--      <p><a :href="loginUrl.naver"><img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></a></p>-->
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {
        loginInfo : {
          type: '',
          id: ''
        },
        loginUrl : {
          naver : `http://localhost:3030/naverlogin`
        }
      }
    },
    mounted() {
    },
    computed: {
      ...mapGetters([
        'getAuth'
      ])
    },
    methods: {
      login() {
        this.$store.dispatch('login', {
          provider : '',
          id : '',
          password : ''
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

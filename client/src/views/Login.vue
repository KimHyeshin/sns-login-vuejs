<template>
  <div>
    Login
    <div>
      <p><button @click="login">Login (Vuex 테스트)</button></p>
      <p><button @click="loginNaver"><img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></button></p>
<!--      <p><a :href="loginUrl.naver"><img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></a></p>-->
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'Login',
    data() {
      return {
        loginUrl : {
          naver : `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.VUE_APP_CLIENT_ID_NAVER}&redirect_uri=${process.env.VUE_APP_CALLBACK_URL_NAVER}&state=STATE`
        }
      }
    },
    methods: {
      ...mapMutations({
        setAuthentication: 'setAuthentication'
      }),
      login() {
        this.setAuthentication(true);
        this.$router.replace(this.$route.query.redirect || '/')
      },
      loginNaver() {
        // this.setAuthentication(true);
        // this.$router.replace(this.$route.query.redirect || '/')
        axios.post('http://localhost:3030/naverlogin', {
          headers: {},
          params: {}
        })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

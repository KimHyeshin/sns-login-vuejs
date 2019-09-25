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
      <p><button @click="login">Login (Vuex 테스트)</button></p>
      <!--<p><button @click="loginNaver"><img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></button></p>-->
      <p><a :href="loginUrl.naver"><img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></a></p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import axios from 'axios'

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
      console.log(this.$route.query);
      if(this.$route.query.isAuth === 'true'){
        this.login()
      }
    },
    computed: {
      ...mapGetters([
        'getAuth'
      ])
    },
    methods: {
      ...mapMutations({
        setAuthentication: 'setAuthentication'
      }),
      login() {
        this.loginInfo.type = this.$route.query.auth_type;
        this.loginInfo.id = this.$route.query.auth_id;
        this.setAuthentication(true);
        // this.$router.replace(this.$route.query.redirect || '/')
      },
      loginNaver() {
        // this.setAuthentication(true);
        // this.$router.replace(this.$route.query.redirect || '/')
        axios.get('http://localhost:3030/naverlogin', {
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

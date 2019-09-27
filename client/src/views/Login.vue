<template>
  <div>
    Login
    <div v-if="getAuth">
      <h1>User Info</h1>
      <div>
        <div>authType : {{getUser.authType}}</div>
        <div>authId : {{getUser.authId}}</div>
        <div>authName : {{getUser.authName}}</div>
        <div>authEmail : {{getUser.authEmail}}</div>
        <div>accessToken : {{getUser.accessToken}}</div>
      </div>
      <div>
        <p><button @click="logout">logout</button></p>
      </div>
    </div>
    <div v-else>
      <p><a :href="loginUrl.naver"><img height="50" :src="loginImage.naver"/></a></p>
      <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {
        loginUrl: {
          naver: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.VUE_APP_CLIENT_ID_NAVER}&redirect_uri=${process.env.VUE_APP_CALLBACK_URL_NAVER}&state=STATE`
        },
        loginImage: {
          naver: `http://static.nid.naver.com/oauth/small_g_in.PNG`
        },
        msg: ''
      }
    },
    mounted() {
        console.log(this.$route.params);
        console.log(this.$route.query);
        if(this.$route.query.returnPath){
          this.setReturnPath(this.$route.query.returnPath);
        }
        if(this.$route.query.user){
          this.login();
        }
    },
    computed: {
      ...mapGetters([
        'getAuth',
        'getReturnPath',
        'getUser',
      ])
    },
    methods: {
      ...mapMutations({
        setReturnPath: 'setReturnPath'
      }),
      login() {
        this.$store.dispatch('login', {
          user : this.$route.query.user
        }).then(() => this.redirect())
                .catch(({message}) => this.msg = message);
      },
      redirect() {
        let returnPath = this.getReturnPath;
        if(returnPath !== null){
          this.setReturnPath(null);
          this.$router.push(returnPath);
        }
      },
      logout() {
        this.$store.dispatch('logout', {
          provider : this.getUser.authType,
          user : this.getUser.authId
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

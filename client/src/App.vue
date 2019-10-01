<template>
  <div id="app">
    {{msg}}
    <top-nav/>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopNav from '@/components/TopNav'

export default {
  name: 'app',
  components: {TopNav},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>

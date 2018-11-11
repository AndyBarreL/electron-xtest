<template>
  <div class="">
     <router-link :to="{ name: 'landing-page'}">
        <el-button type="primary">На главную</el-button>
     </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get(' http://127.0.0.1:9090/systematics')
      .then(response => (this.info = response))
  }
}
</script>

<style lang="css">
</style>

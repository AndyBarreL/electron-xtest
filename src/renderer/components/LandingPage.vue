<template>
  <div class="main-rout">
   <router-link :to="{ name: 'System'}">
      <el-button type="primary" class="bnt-rout">Систематические</el-button>
   </router-link>
   <router-link :to="{ name: 'Cyclin'}">
      <el-button type="primary" class="bnt-rout">Циклические</el-button>
   </router-link>
   <router-link :to="{ name: 'Nonbinary'}">
      <el-button type="primary" class="bnt-rout">хз че это</el-button>
   </router-link>
   <router-link :to="{ name: 'System'}">
      <el-button type="primary" class="bnt-rout">Другие</el-button>
   </router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
.main-rout{
   width: 450px;
   margin: auto;
   display: flex;
   flex-direction: column;
}
.bnt-rout{
   width: 100%;
   margin: 5px;
}
</style>

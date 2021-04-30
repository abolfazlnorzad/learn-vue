<template>
  <router-link :to="{name:'about'}">رفتن به صفحه درباره ما</router-link>
  <h1>اینجا صفحه اصلی ست</h1>
</template>

<script>
export default {
  name: "Home",
  created() {
    setTimeout(()=>{
      // console.log(this.$route);
      this.$router.push({name:'about'});
    },2000);
  }
}
</script>

<style scoped>

</style>
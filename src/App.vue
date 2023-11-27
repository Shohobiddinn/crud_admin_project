<template>
   <div>
  <Loading />
  <router-view> </router-view>
 </div>
</template>

<script>
import Loading from "./components/Animation/Loading.vue";
export default {
  data() {
    return {};
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss" scopd>
</style>
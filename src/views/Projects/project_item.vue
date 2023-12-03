<template>
  <div>
    <pre>{{ projetc_item }} {{ $route.params.id }} </pre>
    
  </div>
</template>

<script>
import api from "../../server/api";

export default {
  data() {
    return {
      projetc_item: {},
      params:{
        id: this.$route.params.id
      }
    };
  },
  methods: {
    get() {
      api.project_one(this.params).then((res) => {
        this.projetc_item = res?.data;
      });
    },
  },
  created() {
    this.get();
  },
};
</script>

<style lang="scss" scoped>
</style>
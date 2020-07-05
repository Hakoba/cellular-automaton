<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
<style>
.theme--dark.v-application {
  background: #555 !important;
}
.theme--dark.v-card {
  background: rgb(59, 59, 59) !important;
}
.theme--dark.v-data-table {
  background: rgb(39, 39, 39) !important;
  color: white;
}
</style>
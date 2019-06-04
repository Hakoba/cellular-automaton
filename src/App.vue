<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Генератор </span>
        <span class="font-weight-light">Паролей</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/Hakoba/cellular-automaton.git"
        target="_blank"
      >
        <span class="mr-2">v(0.9.5)</span>
      </v-btn>
    </v-toolbar>

    <v-content>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
canvas{

  width:600px !important;
  height:200px !important; 

}
</style>

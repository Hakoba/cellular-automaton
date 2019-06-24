<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Игра: </span>
        <span class="font-weight-light">Города</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link tag='span'to="/rules">
      <v-btn
        flat
        target="_blank"
      >
        <span class="mr-2">Правила</span>
      </v-btn>
      </router-link>
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

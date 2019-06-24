<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
<<<<<<< HEAD
        <span>Игра: </span>
        <span class="font-weight-light">Города</span>
=======
        <span>Генератор </span>
        <span class="font-weight-light">Паролей</span>
>>>>>>> 1ca5c8aee536d34d43ed4dbfbe65047e75ad5ef5
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link tag='span'to="/rules">
      <v-btn
        flat
        target="_blank"
      >
<<<<<<< HEAD
        <span class="mr-2">Правила</span>
=======
        <span class="mr-2">v(2.2.8)</span>
>>>>>>> 1ca5c8aee536d34d43ed4dbfbe65047e75ad5ef5
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

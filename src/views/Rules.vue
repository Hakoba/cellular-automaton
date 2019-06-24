<template>
  <div class="small">
    <v-card>
      <v-flex  ml-5 mr-5>
        <h3 class="pt-3">Правила</h3>

        <p>
          Первому игроку необходимо написать название города.
          <br>Далее, каждому игроку необходимо за отведенное время написать название города, при этом оно должно начинаться с последней буквы предыдущего города.
          <br>
          <br>
        </p>
        <h5>Пример:</h5>
        <p>
          <i>Астана</i> =>
          <i>Антананариву</i>
        </p>
      
        <hr>
        
        <router-link tag="span" to="/">
          <v-btn flat class="info" target="_blank">
            
            <span class="">На главную</span>
          </v-btn>
        </router-link>
      </v-flex>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

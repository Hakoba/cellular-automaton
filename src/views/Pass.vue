<template>
     <div class="small">
   
    <v-card>
        <v-flex>
            <v-text-field class="ml-5 mr-5" v-model="count" label="Колличество игроков" >
                
            </v-text-field>
        </v-flex>
       <v-btn class="info ml-5"  @click="kekek">Начать игру</v-btn>

    
    </v-card>
   
  </div>
</template>

<script>
export default {
        data(){
            return{
           
                count: null
            }
        },
        methods:{
           
            kekek(){
                this.$store.commit('setPlayers',this.count);
                this.$router.push('/city');

            }
        },
        mounted: {
            
        }
}
</script>

<style>
</style>
<template>
     <div class="small">
   
    <v-card>
<<<<<<< HEAD
        <v-flex>
            <v-text-field class="ml-5 mr-5" v-model="count" label="Колличество игроков" >
                
            </v-text-field>
        </v-flex>
       <v-btn class="info ml-5"  @click="kekek">Начать игру</v-btn>

    
    </v-card>
   
=======
      <v-text-field ref="btn" class="ml-5 mr-5" v-model="len" label="Колличество знаков" ></v-text-field>
       <v-btn class="info ml-5"  @click="generatePassword()">Сгенерировать</v-btn>
       <v-flex class="ml-5 mr-5">
       <v-checkbox
      v-model="numbers"
      :label="'Цифры'"
    ></v-checkbox>
     <v-checkbox
      v-model="chars"
      :label="'Символы'"
    ></v-checkbox>
    <v-checkbox
      v-model="upper"
      :label="`Заглавные`"
    ></v-checkbox>
    <v-checkbox
      v-model="regular"
      :label="'Строчные'"
    ></v-checkbox> 
    </v-flex>
    </v-card>
    <v-card v-if="pass.length != 0" class="mt-5">
      <ul>
          <li v-for="(item,index) in pass" :key="index">{{item}}</li>
      </ul>
     
    </v-card>
 
>>>>>>> 1ca5c8aee536d34d43ed4dbfbe65047e75ad5ef5
  </div>
</template>

<script>
export default {
        data(){
            return{
<<<<<<< HEAD
           
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
            
=======
                pass: [],
                len: 8,
                numbers: false,
                chars: false,
                upper: false,
                regular: true,
            }
        },
        methods:{
            generatePassword() {
                var length = parseInt(this.len),
                    // charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?;%№*()",
                    charset = "",

                    retVal = "";
                    if( this.numbers){
                        charset += "0123456789"
                    }
                    if( this.upper){
                        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    }
                    if( this.regular){
                        charset += "abcdefghijklmnopqrstuvwxyz"
                    }
                    if(this.chars){
                        charset += "?;%№*()^#@!"
                    } 
                    
                    if (charset.length !=0) {
                        
                   
                for (var i = 0, n = charset.length; i < length; ++i) {
                    retVal += charset.charAt(Math.floor(Math.random() * n));
                }
               this.pass.push(retVal);
                }else{
                    this.pass.push('Выбери хоть один чекбокс')
                }
            }
>>>>>>> 1ca5c8aee536d34d43ed4dbfbe65047e75ad5ef5
        }
}
</script>

<style>
<<<<<<< HEAD
</style>
=======

</style>
>>>>>>> 1ca5c8aee536d34d43ed4dbfbe65047e75ad5ef5

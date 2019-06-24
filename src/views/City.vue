<template>
  <div class="small">
    <v-card>
      <v-flex>
        <h5 class="ml-5 mr-5">Осталось {{seconds}} сек.</h5>
        <v-text-field
          class="ml-5 mr-5"
          v-on:keyup.enter="kekek"
          v-model="tempCity"
          :label="`Ход игрока №${player}`"
        ></v-text-field>
        <v-btn class="info ml-5" @click="kekek">Тап</v-btn>
      </v-flex>
    </v-card>
    <v-card>
      <ul>
        <li v-for="(city,index) in enterCities" :key="index">{{index+1}}: {{city}}</li>
      </ul>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :bottom="y === 'bottom'"
      :vertical="mode === 'vertical'"
    >
      Не верно
      <v-btn color="pink" flat @click="snackbar = false">Закрыть</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  mounted() {
    this.players = this.$store.state.players;
  },
  data() {
    return {
      players: "",
      snackbar: false,
      y: "bottom",
      x: null,
      mode: "",
      timeout: 6000,
      player: 1,
      cities: [
        "Аа",
        "Астана",
        "Сеул",
        "Лима",
        "Нурсултан",
        "Новосибирск",
        "Караганда",
        "Архангельск",
        "Киото",
        "Антананариву",
        "Осло",
        "Урюпинск",
        "Орел"
      ],
      tempCity: null,
      enterCities: [],
      seconds: 60
    };
  },
  methods: {
    kekek() {
      if (this.player == 1) {
        this.cities.indexOf(this.tempCity) == -1
          ? (this.snackbar = true)
          : this.addSomeCity();
      } else {
        let ch = this.enterCities[this.enterCities.length - 1]
          .toString()
          .slice(-1);
        this.tempCity.charAt(0).toLowerCase() != ch
          ? (this.snackbar = true)
          : this.addSomeCity();
      }
    },
    addSomeCity() {
      this.enterCities.push(this.tempCity);
      this.player == this.players ? (this.player = 1) : this.player++;

      this.timer();
    },

    timer() {
      this.seconds = 60;
      let timer;
      timer = setInterval(() => {
        console.log(this.seconds);
        if (this.seconds > 0) {
          this.seconds--;
          console.log(this.seconds);
        } else {
          alert(`Игра окончена, проиграл игрок №${this.player}`);
          clearInterval(timer);
          this.$router.push("/");
        }
      }, 1000);
    }
  }
};
</script>

<style>
</style>
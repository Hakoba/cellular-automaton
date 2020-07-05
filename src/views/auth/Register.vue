
<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Форма регистрации</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Логин" name="login" prepend-icon="md-account" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Поддтвердите пароль"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="primary">Уже есть аккаунт? Войти</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="createUser" color="primary">Создать</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <div class="text-center ma-2">
      <v-snackbar top right v-model="snackbar">
        Поздравляем с успешной регистрацией, вы будете перенесены на главную страницу через 5 секунд
        <v-btn color="primary" text @click="snackbar = false">Перейти</v-btn>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      snackbar: false,
      sec: 5
    };
  },
  methods: {
    createUser() {
      this.snackbar = true;
    }
  }
};
</script>
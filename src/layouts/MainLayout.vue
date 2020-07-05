<template lang="pug">
v-app#inspire
  v-navigation-drawer(v-model='drawer', app='', clipped='')
   
    v-list(dense='' shaped )
      v-list-item
        v-list-item-content
          v-list-item-title
            h3.pa-2 Демо аккаунт
          v-list-item-subtitle.pl-2
            | demo
      v-divider

      v-subheader.mt-4.grey--text.text--darken-1 Этапы
      v-list-item-group(v-model="active")
        v-list-item(v-for='item in routes', :key='item.text' , :disabled="item.disabled"  @click="$router.push({ name: item.route})",  link='')
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title 
              | {{ item.text }}
      v-divider.mt-2(v-if="this.$route.name=='third'")
      v-list-item.mt-4(v-if="this.$route.name=='third'")
        d-ExportToExcel


    template(v-slot:append='')
      .pa-2
        v-btn(block='' @click="$router.push('/auth/login')") Выход
  v-app-bar(app='', clipped-left='', color='primary', dense='')
    v-app-bar-nav-icon(@click.stop='drawer = !drawer' color='white')
    v-toolbar-title.headline.text-uppercase
        span Клеточный 
        span.font-weight-light Автомат
  v-content
    router-view
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      active: "",
      routes: [
        {
          icon: "label",
          text: "Управление",
          route: "first"
        },
        {
          icon: "label",
          text: "Верификация",
          route: "second"
        },
        {
          icon: "label",
          text: "Валидация",
          route: "third"
        }
      ]
    };
  },
  mounted() {
    this.checkActiveRoute();
  },
  methods: {
    checkActiveRoute() {
      for (const index in this.routes) {
        const routerItem = this.routes[index];
        if (routerItem.route == this.$route.name) {
          console.log(index);
          this.active = parseInt(index);
          break;
        }
      }
    }
  }
};
</script>

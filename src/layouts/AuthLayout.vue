<template lang="pug">
v-app#inspire
    
  v-app-bar(app='', clipped-left='', color='primary', dense='')
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
      drawer: null
    };
  }
};
</script>

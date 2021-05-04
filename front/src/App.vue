<template>
  <v-app id="app">
    <!-- <Header v-if="showHeader" /> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
   components: {
      //  Header: () => import('@/components/Header')
   },

   computed: {
     
   }
};
</script>

<style scoped>
#app {
    width: 100%;
    min-height: 100vh;
}
</style>

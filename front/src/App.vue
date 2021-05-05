<template>
  <v-app id="app">
    <Loader :visible="loading" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {
    Loader: () => import('@/components/loader/Loader'),
  },

  computed: {
    ...mapGetters({
      loading: 'loader/loader',
    }),
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>

<template>
  <v-app id="app">
    <Loader :visible="loading" />
    <Snackbar
      :visible="showNotification.isVisible"
      :message="showNotification.message"
      :color="showNotification.color"
    />
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
    Snackbar: () => import('@/components/notification/Snackbar'),
  },

  computed: {
    ...mapGetters({
      loading: 'loader/loader',
      showNotification: 'notification/$snackbar',
    }),
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>

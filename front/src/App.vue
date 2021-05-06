<template>
  <v-app id="app">
    <Loader :visible="$loading" />
    <Snackbar
      :visible="$showNotification.isVisible"
      :message="$showNotification.message"
      :color="$showNotification.color"
    />

    <Header v-if="authenticationUser" />
    <v-main class="grey lighten-3 100vh">
      <transition
        enter-active-class="animate__animated animate__fadeInRight"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import 'animate.css';
import { mapGetters } from 'vuex';
export default {
  components: {
    Loader: () => import('@/components/loader/Loader'),
    Snackbar: () => import('@/components/notification/Snackbar'),
    Header: () => import('@/components/header/Header'),
  },

  computed: {
    ...mapGetters({
      $loading: 'loader/loader',
      $showNotification: 'notification/$snackbar',
      $currentUser: 'user/$currentUser',
    }),

    authenticationUser() {
      return Object.keys(this.$currentUser).length > 0;
    },
  },
};
</script>

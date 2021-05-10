<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 d-flex align-center justify-space-between">
      <router-link to="/" class="logo"><b>My</b>Contacts </router-link>
      <div class="d-flex">
        <v-btn
          v-for="(link, index) in links"
          :color="link.color"
          :to="link.to"
          :key="index"
          text
          @click="link.action == 'logout' ? logout() : null "
        >
          {{ link.name }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', to: '/home', color: 'primary' },
      { name: 'Perfil', to: '/profile', color: 'primary' },
      { name: 'Sair', to: '/', color: 'red', action: 'logout' },
    ],
  }),

  methods: {
    logout() {
      this.$store.dispatch('authentication/logout');
    },
  },
};
</script>

<style lang="scss" scoped>
  .logo{
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;

    b {
      color: $orange;
    }
  }
</style>

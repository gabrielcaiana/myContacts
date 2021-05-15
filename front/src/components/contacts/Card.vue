<template>
  <v-card class="card d-flex flex-column align-center justify-center">
    <h3 class="card__name">{{ fullName }}</h3>
    <span class="card__email">{{ contact.email[0] }}</span>
    <v-btn class="card_button" outlined @click="showProfile">Visualizar perfil</v-btn>

    <profileModal :dialog="openDialog" :contact="contact" @close="closeModal"  />
  </v-card>
</template>

<script>
export default {
  components: {
    profileModal:() => import('./ProfileModal')
  },

  props: {
    contact: { type: Object, required: true },
  },

  data:() => ({
    openDialog: false
  }),

  computed: {
    fullName() {
      return `${this.contact.name.first} ${this.contact.name.last}`;
    },
  },

  methods: {
    showProfile() {
      this.openDialog = !this.openDialog;
    },

    closeModal() {
      this.openDialog = !this.openDialog
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  border: 1px solid $gray-100;
  padding: 1rem;
  box-sizing: border-box;

  &__name {
    color: $gray-800;
    font-size: 1rem;
    margin: 0.85rem 0 0.1rem 0;
  }

  &__email {
    color: $gray-500;
    font-size: 0.85rem;
  }

  &_button {
    background: var(--v-primary-base);
    color: $white;
    margin: 1rem 0;
  }
}
</style>

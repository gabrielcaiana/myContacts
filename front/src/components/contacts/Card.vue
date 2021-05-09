<template>
  <v-card class="card d-flex flex-column align-center justify-center">
    <img class="card__avatar" :src="picture.medium" :alt="name.first" />
    <h3 class="card__name">{{ fullName }}</h3>
    <span class="card__email">{{email[0]}}</span>
    <v-btn class="card_button" outlined >Visualizar perfil</v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    gender: { type: String, required: true },
    name: { type: Object, required: true },
    age: { type: Number, required: true },
    email: { type: Array, required: true },
    location: { type: Object, required: true },
    phone: { type: Array, required: true },
    cell: { type: Array, required: true },
    picture: { type: Object, required: true },
  },

  computed: {
    fullName() {
      return `${this.name.first} ${this.name.last}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    width: 100%;
    height: 300px;
    border: 1px solid $gray-100;
    padding: 1rem;

    &__avatar {
      border-radius: 50% !important;
      border: 2px solid var(--v-primary-base);
      padding: 0.5rem;
    }

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
      background: $orange;
      color: $white;
      margin: 1rem 0;
    }
  }
</style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet rounded="lg" class="pb-8">
          <div class="content">
            <h1 class="content__title">Lista de contatos</h1>
            <p class="content__quantity">
              Total: <span class="primary--text">{{ totalContacts }}</span>
            </p>
          </div>
          <div class="cards">
            <Card
              v-for="contact in $contacts"
              :key="contact.id"
              :contact="contact"
            />
          </div>

          <v-fab-transition>
            <v-btn color="primary" dark fixed bottom right fab @click="showModal = !showModal">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>

          <RegisterContact @close="closeModal" :dialog="showModal" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {
    Card: () => import('@/components/contacts/Card'),
    RegisterContact: () => import('@/components/contacts/RegisterContact.vue'),
  },

  data: () => ({
    showModal: false
  }),

  computed: {
    ...mapGetters({
      $contacts: 'contacts/$contacts',
    }),

    totalContacts() {
      return this.$contacts ? this.$contacts.length : '';
    },
  },

  mounted() {
    this.$store.dispatch('contacts/listContacts');
  },

  methods: {
    closeModal() {
      this.showModal = !this.showModal
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  &__title {
    color: $gray-800;
    font-size: 1.6rem;
  }

  &__quantity {
    margin: 0;
    color: $gray-800;
    font-weight: bold;
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding: 1rem;
}
</style>

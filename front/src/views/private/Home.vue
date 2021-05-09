<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-sheet min-height="80vh" rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="n in 5" :key="n" link>
              <v-list-item-content>
                <v-list-item-title> List Item {{ n }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey lighten-4">
              <v-list-item-content>
                <v-list-item-title> Refresh </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col cols="9">
        <v-sheet min-height="80vh" rounded="lg" class="cards">
          <Card
            v-for="contact in $contacts"
            :key="contact.id"
            :gender="contact.gender"
            :name="contact.name"
            :age="contact.age"
            :email="contact.email"
            :location="contact.location"
            :phone="contact.phone"
            :cell="contact.cell"
            :picture="contact.picture"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({}),

  components: {
    Card: () => import('@/components/contacts/Card'),
  },

  computed: {
    ...mapGetters({
      $contacts: 'contacts/$contacts',
    }),
  },

  mounted() {
    this.$store.dispatch('contacts/listContacts');
  },
};
</script>

<style lang="scss" scoped>
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 300px;
    grid-gap: 1rem;
    padding: 1rem;
  }
</style>

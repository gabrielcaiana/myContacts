<template>
    <v-main class="grey lighten-3 100vh">
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
            <v-sheet min-height="80vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
export default {
  data:() => ({}),
  async created() {
    await this.$store.dispatch('members/listMembers')
  }
};
</script>

<style lang="scss" scoped></style>

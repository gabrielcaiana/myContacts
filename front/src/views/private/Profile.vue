<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet
          min-height="80vh"
          rounded="lg"
          class="profile d-flex align-center justify-center"
        >
          <div class="profile__avatar">
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwnit9MemWF5ARt7cgbvbp_Tba1b8T0csOS7iDLzf=s900-c-k-c0x00ffffff-no-rj"
              alt="Foto do usuario"
            />
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.profile {
  &__avatar {
    border-radius: 50%;
    border: 1px solid var(--v-primary-base);
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 90%;
      padding: 1rem;
    }
  }
}
</style>

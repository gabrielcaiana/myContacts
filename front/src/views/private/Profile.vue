<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet
          min-height="80vh"
          rounded="lg"
          class="profile d-flex align-center justify-center"
        >
          <form @submit.prevent="updateProfile" class="profile__form">
            <div class="profile__avatar">
              <img v-if="imagePreview" :src="imagePreview" />
              <div class="profile__avatar__upload">
                <div>
                  <input
                    ref="input"
                    type="file"
                    class="d-none"
                    accept="image/*"
                    @change="handleFile($event)"
                  />
                  <v-btn
                    @click="openFileDialog()"
                    type="button"
                    color="primary"
                    fab
                    dark
                    small
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                disabled
                v-model="$currentUser.email"
                label="Email"
              ></v-text-field>
              <v-text-field
                v-model="$currentUser.name"
                label="Nome"
              ></v-text-field>
              <v-radio-group v-model="$currentUser.gender">
                <v-radio
                  v-for="n in genderItems"
                  :key="n"
                  :label="`${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
              <v-btn type="submit" class="primary">Salvar</v-btn>
            </div>
          </form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    imagePreview: '',
    user: {
      avatar: '',
      email: '',
      name: '',
      gender: '',
    },
    genderItems: ['Masculino', 'Feminino', 'Não Binário'],
  }),

  computed: {
    ...mapGetters({
      $currentUser: 'user/$currentUser',
    }),

    fileName() {
      const { avatar } = this.user;
      if (avatar) {
        const split = avatar.name.split('.');
        return `${split[0]}-${new Date().getTime()}.${split[1]}`;
      } else if (this.$currentUser.avatar) {
        return this.$currentUser.avatar.fileName
      } else {
        return ""
      }
    },
  },

  mounted() {
    this.setUserAvatar()
  },

  methods: {
    setUserAvatar() {
      setTimeout(() => this.$currentUser.avatar ? this.imagePreview = this.$currentUser.avatar.url : null , 1000)  
    },

    openFileDialog() {
      this.$refs.input.value = null;
      this.$refs.input.click();
    },

    handleFile({ target }) {
      this.user.avatar = target.files[0];
      this.imagePreview = URL.createObjectURL(target.files[0]);
    },

    async updateProfile() {
      let payload = {
        ...this.$currentUser,
        avatar: {
          object: this.user.avatar,
          fileName: this.fileName
        },
      };

      this.$store.dispatch('user/updateCurrentUser', payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  padding: 2rem 0;
  &__form {
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  &__avatar {
    position: relative;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0 auto 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $gray-100;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    &__upload {
      position: absolute;
      bottom: 0;
      border-radius: 50%;
      right: -10px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $white;
    }
  }
}
</style>

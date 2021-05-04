<template>
  <div class="login">
    <v-container>
      <v-row class="login__content d-flex align-center justify-center">
        <v-col
          class="login__content__ilustration d-flex align-center justify-center"
          cols="6"
        >
          <div
            class="login__content__ilustration--bg d-flex align-center justify-center"
          >
            <img
              class="login__content__ilustration--svg"
              src="@/assets/login.svg"
              alt="Bem vindos"
            />
          </div>
        </v-col>
        <v-col class="d-flex flex-column justify-center pa-6" cols="6">
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            mode="out-in"
          >
            <component
              :is="currentComponent"
              @currentComponent="changeComponent($event)"
            />
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import 'animate.css';
export default {
  components: {
    Login: () => import('../components/authentication/Login'),
    Register: () => import('../components/authentication/Register'),
  },

  data: () => ({
    currentComponent: 'Login',
  }),

  methods: {
    changeComponent(component) {
      this.currentComponent = component;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  background: $gray-50;
  &__content {
    height: 100%;
    &__ilustration {
      height: 100vh;

      &--bg {
        border-radius: 0.5rem;
        width: 90%;
        height: 28rem;
      }

      &--svg {
        width: 90%;
      }
    }

    &__link-register {
      font-weight: bold;
      transition: 0.3s;

      &:hover {
        color: $orange;
      }
    }
  }
}
</style>

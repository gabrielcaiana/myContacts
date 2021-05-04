<template>
  <div class="form pa-8">
    <h1 class="mb-5 primary--text">Seja bem vindo</h1>
    <form @submit.prevent="submit" class="mb-6">
      <v-text-field v-model="login.email" label="E-mail" required>
      </v-text-field>
      <v-text-field
        v-model="login.password"
        :append-icon="iconInputPassword.show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="iconInputPassword.show1 ? 'text' : 'password'"
        name="password"
        label="Senha"
        required
        @click:append="iconInputPassword.show1 = !iconInputPassword.show1"
      ></v-text-field>
      <v-btn class="mr-4 mt-4 primary" type="submit">Entrar</v-btn>
    </form>
    <span
      >Ainda não tem um cadastro?
      <a class="login__content__link-register" @click="goRegister"
        >Faça agora mesmo</a
      ></span
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    login: {
      email: '',
      password: '',
    },
    iconInputPassword: {
      show1: false,
      show2: true,
    },
  }),

  methods: {
    submit() {
      console.log(this.login);
    },

    goRegister() {
      this.$emit('currentComponent', 'Register');
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  background: $white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 8px 0px $shadow-gray;
}
</style>

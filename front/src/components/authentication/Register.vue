<template>
  <div class="form pa-8">
    <h1 class="mb-5 primary--text">Faça seu cadastro</h1>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="30"
        label="Nome"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :error-messages="genderErrors"
        label="Selecione seu genêro"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>

      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        label="Senha"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>

      <v-btn class="primary" :disabled="$v.$invalid" @click="submit">
        Confirmar cadastro
      </v-btn>
      <v-btn outlined class="ml-2 primary--text" @click="goLogin">
        Voltar
      </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  maxLength,
  email,
  minLength,
} from 'vuelidate/lib/validators';
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    select: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },

  data: () => ({
    name: '',
    select: null,
    email: '',
    password: '',
    items: ['Masculino', 'Feminino', 'Não Binário'],
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push('O nome deve conter no máximo 30 caracteres');
      !this.$v.name.required && errors.push('Informe um nome');
      return errors;
    },
    genderErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push('Informe um genêro');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('Informe um email');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required &&
        errors.push('A senha deve conter no mínimo 6 caracteres');
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      let form = {
        name: this.name,
        gender: this.select,
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch('authentication/registerUser', form)
    },

    goLogin() {
      this.$emit('currentComponent', 'Login');
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

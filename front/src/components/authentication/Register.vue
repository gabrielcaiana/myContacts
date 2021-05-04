<template>
  <div class="form pa-8">
    <h1 class="mb-5 primary--text">Faça seu cadastro</h1>
    <form>
      <v-text-field
        v-model="form.name"
        :error-messages="nameErrors"
        :counter="30"
        label="Nome"
        required
        @input="$v.form.name.$touch()"
        @blur="$v.form.name.$touch()"
      ></v-text-field>

      <v-select
        v-model="form.select"
        :items="items"
        :error-messages="genderErrors"
        label="Selecione seu genêro"
        required
        @change="$v.form.select.$touch()"
        @blur="$v.form.select.$touch()"
      ></v-select>

      <v-text-field
        v-model="form.email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.form.email.$touch()"
        @blur="$v.form.email.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        :error-messages="passwordErrors"
        label="Senha"
        required
        @input="$v.form.password.$touch()"
        @blur="$v.form.password.$touch()"
      ></v-text-field>

      <v-btn disabled @click="submit"> Confirmar cadastro </v-btn>
      <v-btn class="ml-2" @click="goLogin"> Voltar </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    select: { required },
    email: { required, email },
    password: { required },
  },

  data: () => ({
    form: { name: '', select: null, email: '', password: '' },
    items: ['Masculino', 'Feminino', 'Não Binário'],
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.form.name.maxLength &&
        errors.push('O nome deve conter no máximo 30 caracteres');
      !this.$v.form.name.required && errors.push('Informe um nome');
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
      !this.$v.password.required && errors.push('Informe uma senha');
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      alert('');
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

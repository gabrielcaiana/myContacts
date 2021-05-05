<template>
  <div class="text-center">
    <v-dialog
      :value="dialog"
      width="350"
      @input="$emit('resetPassword', false)"
    >
      <v-card>
        <v-card-title class="primary white--text d-flex justify-space-between">
          <span>Recuperar senha</span>
          <v-btn icon dark @click="$emit('resetPassword', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-container class="pb-6">
          <v-card-text class="px-0"
            >Informe seu email para receber as instruções para redefiçāo da
            senha.</v-card-text
          >
          <form @submit.prevent="sendResetPassword" class="d-flex flex-column">
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-btn type="submit" large class="primary"
              >Recuperar</v-btn
            >
          </form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data: () => ({
    email: '',
  }),

  methods: {
    sendResetPassword() {
      console.log(this.email)
    },
  },
};
</script>

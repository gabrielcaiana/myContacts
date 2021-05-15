<template>
  <v-row justify="center">
    <v-dialog
      transition="dialog-bottom-transition"
      v-if="dialog"
      :value="dialog"
    >
      <v-card class="profile">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title> Perfil do contato </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="save"> Salvar </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <form @submit.prevent="save">
              <h3 class="profile__subtitle">Dados:</h3>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Nome"
                    required
                    v-model="contact.name.first"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="sobrenome"
                    v-model="contact.name.last"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    type="number"
                    label="Idade"
                    required
                    v-model="contact.age"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-select
                    v-model="contact.gender"
                    :items="genderItems"
                    :key="contact.gender"
                    label="Selecione seu genêro"
                    required
                  ></v-select>
                </v-col>
              </v-row>

              <h3 class="profile__subtitle">Formas de contato:</h3>
              <v-row>
                <v-col
                  cols="6"
                  v-for="(email, index) in contact.email"
                  :key="index"
                >
                  <v-text-field
                    label="Email"
                    type="email"
                    required
                    v-model="contact.email[index]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="d-flex align-center justify-center">
                    <v-btn text class="profile__btn-new">
                      Cadastrar novo email
                    </v-btn>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="6"
                  v-for="(phone, index) in contact.phone"
                  :key="index"
                >
                  <v-text-field
                    label="Telefone"
                    type="text"
                    required
                    v-model="contact.phone[index]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="d-flex align-center justify-center">
                    <v-btn text class="profile__btn-new">
                      Cadastrar novo telefone
                    </v-btn>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="6"
                  v-for="(cell, index) in contact.cell"
                  :key="index"
                >
                  <v-text-field
                    label="Celular"
                    type="text"
                    required
                    v-model="contact.cell[index]"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="d-flex align-center justify-center">
                    <v-btn text class="profile__btn-new">
                      Cadastrar novo celular
                    </v-btn>
                  </div>
                </v-col>
              </v-row>

              <h3 class="profile__subtitle">Endereço</h3>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Endereço"
                    required
                    v-model="contact.location.street"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="Cidade"
                    required
                    v-model="contact.location.city"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="Estado"
                    required
                    v-model="contact.location.state"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="d-flex justify-end">
                  <v-btn outlined color="error" depressed @click="destroy">
                    Deletar
                  </v-btn>

                  <destroyConfirm
                    title="Confirmar"
                    description="Ao excluir todos os dados do contato serão perdidos, deseja prosseguir?"
                    color="error"
                    :dialog="destroyDialog"
                    @close="destroy($event)"
                  />
                </v-col>
              </v-row>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  components: {
    destroyConfirm: () => import('../dialogs/DialogConfirm'),
  },
  props: {
    dialog: { type: Boolean, required: true },
    contact: { type: Object, required: true },
  },

  data: () => ({
    genderItems: ['Masculino', 'Feminino', 'Não Binário'],
    destroyDialog: false,
  }),

  methods: {
    save() {
      this.$store.dispatch('contacts/updateContact', this.contact);
    },

    destroy(event) {
      this.destroyDialog = !this.destroyDialog;
      if (event.confirm) {
        this.$store.dispatch('contacts/destroyContact', this.contact.id);
        this.$emit('close');
        this.$store.dispatch('contacts/listContacts');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  color: var(--v-primary-base);
  &__subtitle {
    padding: 1rem 0;
    color: $gray-500;
  }

  &__btn-new {
    color: var(--v-primary-base);
    text-align: center;
  }
}

.btn-destroy {
  color: #fff;
  background-color: #f00;
}
</style>

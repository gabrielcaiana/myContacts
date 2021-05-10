<template>
  <v-row justify="center">
    <v-dialog v-if="dialog" :value="dialog" persistent max-width="600px">
      <v-card class="profile">
        <v-card-title>
          <span class="headline profile__title">Perfil do contato</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <h3 class="profile__subtitle">Dados:</h3>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="Nome"
                  required
                  v-model="$contact.name.first"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="sobrenome"
                  v-model="$contact.name.last"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  type="number"
                  label="Idade"
                  required
                  v-model="$contact.age"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-select
                  v-model="$contact.gender"
                  :items="genderItems"
                  :key="$contact.gender"
                  label="Selecione seu genêro"
                  required
                ></v-select>
              </v-col>
            </v-row>

            <h3 class="profile__subtitle">Formas de contato:</h3>
            <v-row>
              <v-col>
                <v-text-field
                  v-for="(email, index) in $contact.email"
                  :key="index"
                  label="Email"
                  type="email"
                  required
                  :value="email"
                ></v-text-field>
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
                v-for="(phone, index) in $contact.phone"
                :key="index"
              >
                <v-text-field
                  label="Telefone"
                  type="text"
                  required
                  :value="phone"
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
                v-for="(cell, index) in $contact.cell"
                :key="index"
              >
                <v-text-field
                  label="Telefone"
                  type="text"
                  required
                  :value="cell"
                ></v-text-field>
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
                  v-model="$contact.location.street"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="Cidade"
                  required
                  v-model="$contact.location.city"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="Estado"
                  required
                  v-model="$contact.location.state"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="gray" text @click="$emit('close')"> Close </v-btn>
          <v-btn color="primary" text @click="$emit('close')"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    dialog: { type: Boolean, required: true },
  },

  data: () => ({
    genderItems: ['Masculino', 'Feminino', 'Não Binário'],
  }),

  computed: {
    ...mapGetters({
      $contact: 'contacts/$contactSelected',
    }),
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
</style>

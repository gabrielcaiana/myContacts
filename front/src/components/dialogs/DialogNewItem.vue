<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline px-4" v-text="title"></v-card-title>
        <v-container>
          <v-text-field
            :label="label"
            :type="type"
            v-model="value"
            required
          ></v-text-field>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="gray" text @click="$emit('close', { confirm: false })">
            Voltar
          </v-btn>
          <v-btn
            :color="color"
            text
            @click="$emit('close', { confirm: true, value })"
          >
            Inserir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    label: { type: String, required: true },
    color: { type: String, required: true },
  },

  data: () => ({
    value: '',
  })
};
</script>

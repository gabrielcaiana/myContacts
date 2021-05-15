<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline" v-text="title"></v-card-title>
        <v-card-text v-text="description"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="gray" text @click="$emit('close', { confirm: false })">
            Voltar
          </v-btn>
          <v-btn :color="color" text @click="$emit('close', { confirm: true })"> Deletar </v-btn>
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
    description: { type: String, required: true },
    color: { type: String, required: true },
  },
};
</script>

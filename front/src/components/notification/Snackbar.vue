<template>
  <div class="text-center ma-2">
    <v-snackbar :value="visible" :color="color">
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

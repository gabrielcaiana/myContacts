<template>
  <div class="text-center loader">
    <v-progress-circular
      :size="50"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
  z-index: 999;
}

.loader {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.37);
}
</style>

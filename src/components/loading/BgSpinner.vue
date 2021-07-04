<template>
  <v-sheet class="bg-spinner" v-if="showBg" color="white">
    <v-spacer></v-spacer>

    <v-progress-circular
      :size="60"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-spacer></v-spacer>
    <div class="logo">
      <img src="../../assets/images/logo.svg" alt="Logo Lucas Dev" />
    </div>
    <div class="lucas-dev">Lucas <span>Dev</span></div>
  </v-sheet>
</template>

<script>
export default {
  name: "BgSpinner",
  data() {
    return {
      showBg: false,
    };
  },
  created() {
    this.$root.$on("bgSpinner::show", () => {
      this.showBg = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.bg-spinner {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 100000;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
}
</style>

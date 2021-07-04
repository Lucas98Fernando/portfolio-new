<template>
  <v-app-bar
    app
    color="white"
    class="mx-auto"
    elevate-on-scroll="true"
    height="75"
  >
    <v-container>
      <v-row align="center">
        <div class="logo">
          <img src="../../assets/images/logo.svg" alt="Logo Lucas Dev" />
        </div>

        <div class="lucas-dev ml-3">Lucas <span>Dev</span></div>

        <div class="flex-grow-1"></div>

        <div class="content-right">
          <v-icon @click="drawerShow" color="primary" size="40"
            >mdi-menu</v-icon
          >
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    drawerShow() {
      this.$root.$emit("Drawer::show");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/fonts";
.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .content-left {
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <div class="app-bar">
    <div class="content-left">
      <div class="logo">
        <img src="../../assets/images/logo.svg" alt="Logo Lucas Dev" />
      </div>
      <div class="lucas-dev ml-3">Lucas <span>Dev</span></div>
    </div>
    <div class="content-right">
      <v-icon @click="drawerShow" color="primary" size="40">mdi-menu</v-icon>
    </div>
    <drawer />
  </div>
</template>

<script>
import Drawer from "@/components/layout/Drawer.vue";

export default {
  name: "AppBar",
  components: {
    Drawer,
  },
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

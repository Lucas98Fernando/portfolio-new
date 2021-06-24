<template>
  <div class="app-bar">
    <div class="content-left">
      <div class="logo">
        <img src="../../assets/images/logo.svg" alt="" />
      </div>
      <div class="lucas-dev">Lucas <span>Dev</span></div>
    </div>
    <div class="content-right">
      <v-icon color="primary" size="40">mdi-menu</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
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

    .logo {
      img {
        width: 60px;
      }
    }

    .lucas-dev {
      margin-left: 1rem;
      color: var(--v-primary-base);
      font-weight: 500;
      font-size: 1.3rem;
      font-family: $bigSholders;

      span {
        color: var(--v-secondary-base);
      }
    }
  }
}
</style>

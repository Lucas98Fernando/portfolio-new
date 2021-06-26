<template>
  <div id="hero">
    <v-row align="center" justify="space-between" :class="alignment">
      <v-col cols="12" md="6" sm="12" :order="orderInfo">
        <span id="welcome">Hello, world !</span>
        <h1 id="me">Me chamo <span>Lucas Fernando</span></h1>
        <span id="dev">Front-end developer</span>
        <div class="cta-group mt-3">
          <v-btn
            color="primary"
            id="btn-hero"
            class="btn-linkedin mr-3"
            href="https://www.linkedin.com/in/lucas-fernando-dev/"
            target="_blank"
          >
            <v-icon class="mr-2">mdi-linkedin</v-icon>
            LinkedIn</v-btn
          >
          <v-btn
            color="primary"
            id="btn-hero"
            outlined
            href="https://github.com/Lucas98Fernando"
            target="_blank"
            ><v-icon class="mr-2">mdi-github</v-icon>GitHub</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12" :order="orderImg">
        <img src="../../assets/images/hero.svg" alt="Café e código" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      alignment: "",
      orderInfo: "",
      orderImg: "",
    };
  },
  mounted() {
    if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
      this.alignment = "text-center";
      this.orderInfo = 2;
      this.orderImg = 1;
    }
  },
};
</script>

<style lang="scss" scoped>
#hero {
  /* background-image: url("../../assets/images/bg-workspace.svg");
  background-size: cover; */
  #welcome,
  #dev {
    color: var(--v-blackDark-lighten4);
    font-size: 1.2rem;
  }

  #me {
    color: var(--v-primary-base);
    font-size: 2.3rem;

    span {
      color: var(--v-secondary-base);
    }
  }

  #btn-hero {
    border-radius: 5px;
    text-transform: none;
    padding: 20px;
    font-size: 1.3rem;
    box-shadow: -4px 4px 20px rgba(114, 9, 183, 0.5);
  }
}
</style>

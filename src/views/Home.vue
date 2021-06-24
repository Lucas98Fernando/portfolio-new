<template>
  <v-container>
    <app-bar />
    <hero />
    <about-me />
  </v-container>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import Hero from "@/components/sections/Hero.vue";
import AboutMe from "@/components/sections/AboutMe.vue";

export default {
  name: "Home",

  components: {
    AppBar,
    Hero,
    AboutMe,
  },
};
</script>

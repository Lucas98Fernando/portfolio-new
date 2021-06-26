<template>
  <v-container>
    <app-bar />
    <hero />
    <about-me />
    <features />
    <skills />
  </v-container>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import Hero from "@/components/sections/Hero.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import Features from "@/components/sections/Features.vue";
import Skills from "@/components/sections/Skills.vue";

export default {
  name: "Home",

  components: {
    AppBar,
    Hero,
    AboutMe,
    Features,
    Skills,
  },
};
</script>

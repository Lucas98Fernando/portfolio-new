<template>
  <v-container>
    <bg-spinner />
    <app-bar />
    <drawer />
    <hero />
    <about-me />
    <features />
    <skills />
    <projects />
    <contact />
  </v-container>
</template>

<script>
import BgSpinner from "@/components/loading/BgSpinner.vue";
import AppBar from "@/components/layout/AppBar.vue";
import Drawer from "@/components/layout/Drawer.vue";
import Hero from "@/components/sections/Hero.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import Features from "@/components/sections/Features.vue";
import Skills from "@/components/sections/Skills.vue";
import Projects from "@/components/sections/Projects.vue";
import Contact from "@/components/sections/Contact.vue";

export default {
  name: "Home",

  components: {
    BgSpinner,
    AppBar,
    Drawer,
    Hero,
    AboutMe,
    Features,
    Skills,
    Projects,
    Contact,
  },
};
</script>

<template>
  <v-navigation-drawer v-model="drawer" fixed right temporary app>
    <v-list-item>
      <v-list-item-content class="text-center">
        <div class="logo">
          <img src="../../assets/images/logo.svg" alt="" />
        </div>
        <div class="lucas-dev">Lucas <span>Dev</span></div>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :href="item.href"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Início", icon: "mdi-home-variant-outline", href: "#hero" },
        { title: "Sobre mim", icon: "mdi-account-outline", href: "#about-me" },
        {
          title: "Características",
          icon: "mdi-card-account-details-outline",
          href: "#features",
        },
        {
          title: "Habilidades",
          icon: "mdi-badge-account-outline",
          href: "#skills",
        },
        {
          title: "Projetos",
          icon: "mdi-briefcase-variant-outline",
          href: "#projects",
        },
        {
          title: "Contato",
          icon: "mdi-card-account-phone-outline",
          href: "#contact",
        },
      ],
    };
  },
  created() {
    this.$root.$on("Drawer::show", () => {
      this.drawer = true;
    });
  },
};
</script>

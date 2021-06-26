<template>
  <v-navigation-drawer v-model="drawer" fixed right temporary>
    <v-list-item>
      <v-list-item-content class="text-center">
        <!--  <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle> -->
        <div class="logo">
          <img src="../../assets/images/logo.svg" alt="" />
        </div>
        <div class="lucas-dev">Lucas <span>Dev</span></div>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
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
        { title: "Início", icon: "mdi-home-variant-outline" },
        { title: "Sobre mim", icon: "mdi-account-outline" },
        { title: "Características", icon: "mdi-card-account-details-outline" },
        { title: "Habilidades", icon: "mdi-badge-account-outline" },
        { title: "Projetos", icon: "mdi-briefcase-variant-outline" },
        { title: "Contato", icon: "mdi-card-account-phone-outline" },
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

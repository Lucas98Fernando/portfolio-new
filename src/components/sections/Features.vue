<template>
  <div id="features">
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <h2 id="title-section" class="mb-3">
          <v-icon color="secondary" class="mr-2" size="40"
            >mdi-console-line</v-icon
          >
          Principais características
        </h2>
      </v-col>
      <v-col
        cols="12"
        md="4"
        :key="item.id"
        v-for="item in items"
        class="d-flex align-items-stretch"
      >
        <v-card id="card-features" class="mx-auto" width="100%" rounded="xl">
          <v-card-text id="card-content">
            <img :id="item.idImg" :src="item.src" :alt="item.alt" />
            <h3 class="card-title mt-4 mb-3">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Features",
  data() {
    return {
      items: [
        {
          id: 1,
          idImg: "responsive-img",
          src: require("../../assets/images/responsive.svg"),
          alt: "Responsividade",
          title: "Responsividade",
          description: "Sites responsivos para qualquer tipo de dispositivo",
        },
        {
          id: 2,
          idImg: "team-work-img",
          src: require("../../assets/images/team-work.svg"),
          alt: "Trabalho em equipe",
          title: "Trabalho em equipe",
          description:
            "Sempre a disposição para ouvir e aprender com outros devs, respeitando o espaço de cada um.",
        },
        {
          id: 3,
          idImg: "seo-img",
          src: require("../../assets/images/seo.svg"),
          alt: "Sites otimizados para SEO",
          title: "SEO",
          description:
            "Buscando sempre otimização para mecanismos de buscas, para obter os melhores ranckeamentos.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#features {
  .v-card.v-sheet {
    display: flex;
    align-items: stretch;
  }

  .card-title {
    color: var(--v-secondary-base);
    font-size: 1.3rem;
  }

  #card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin-bottom: 0;
    }
  }

  #responsive-img,
  #team-work-img {
    width: 300px;
  }

  #seo-img {
    width: 200px;
  }
}
</style>

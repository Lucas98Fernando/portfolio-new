<template>
  <div id="about-me">
    <v-row align="center" class="text-center">
      <v-col cols="12" md="6">
        <img src="../../assets/images/about.svg" alt="Conhecendo sobre mim" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card id="card-about" rounded="xl">
          <v-card-text>
            <h2 id="title-about" class="mb-3">
              <v-icon color="secondary" class="mr-2" size="40"
                >mdi-console-line</v-icon
              >
              Sobre mim
            </h2>
            <p>
              Sou extremamente apoixonado por tecnologia, adoro aprender coisas
              novas e me desafiar a cada dia.
            </p>
            <p>
              Estou buscando evoluir constantemente, porém não busco ser melhor
              que ninguém, apenas quero ser melhor do que eu fui ontem.
            </p>
            <p>
              Gosto bastante de passar o que eu sei para outras pessoas, para
              dessa forma, crescermos juntos.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn
        id="btn-cv"
        color="secondary"
        class="rounded-xl"
        x-large
        download
        href="../../assets/documents/curriculo-lucas-dev.pdf"
        ><v-icon class="mr-2">mdi-download</v-icon>Baixar CV</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/responsive";

#about-me {
  #title-about {
    color: var(--v-primary-base);
    font-size: 2.1rem;
  }

  #card-about {
    box-shadow: 1px 4px 25px 2px#FE762480;

    @include responsive(sm) {
      box-shadow: 1px 1px 2px 2px#FE762480;
    }
  }

  #btn-cv {
    text-transform: none;
    box-shadow: 1px 4px 8px 2px#7209B740;
  }
}
</style>

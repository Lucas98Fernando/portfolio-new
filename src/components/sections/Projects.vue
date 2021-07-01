<template>
  <div id="projects">
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <h2 id="title-section" class="mb-3">
          <v-icon color="secondary" class="mr-2" size="40"
            >mdi-console-line</v-icon
          >
          Projetos
        </h2>
      </v-col>
      <v-col
        cols="12"
        md="4"
        :key="item.id"
        v-for="item in items"
        class="d-flex align-items-stretch"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            id="card-projects"
            class="mx-auto"
            color="grey lighten-4"
            rounded="xl"
          >
            <v-img :src="item.src">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    orange
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                >
                  <v-btn
                    color="primary"
                    :href="item.github"
                    target="_blank"
                    class="mr-2"
                    ><v-icon class="mr-2">mdi-github</v-icon>GitHub</v-btn
                  >
                  <v-btn color="primary" :href="item.href" target="_blank"
                    ><v-icon class="mr-2">mdi-gesture-tap</v-icon>Acessar</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <h3 id="title-project" class="mb-2">
                {{ item.title }}
              </h3>
              <p>
                {{ item.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="mt-5">
        <v-row align="center" justify="center">
          <v-btn
            color="secondary"
            class="rounded-xl"
            x-large
            href="https://github.com/Lucas98Fernando/"
            target="_blank"
            ><v-icon class="mr-2">mdi-plus</v-icon>Ver mais</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../../assets/images/spiderman.jpg"),
          github: "https://github.com/Lucas98Fernando/spiderman-landing-page",
          href: "https://spidermanlp-milesmorales.netlify.app/",
          title: "Landing Page Spider-Man | Miles Morales",
          description:
            "Desenvolvida com HTML, SASS e JS, aplicando conceitos de Motion Design com o GSAP, Tilt e AOS.",
        },
        {
          id: 2,
          src: require("../../assets/images/turbinagran.jpg"),
          github: "https://github.com/Lucas98Fernando/",
          href: "https://turbinagran.com.br/",
          title: "Turbinagran",
          description:
            "Sistema web para impulsionamento de redes sociais, desenvolvido com Bootstrap e CodeIgniter.",
        },
        {
          id: 3,
          src: require("../../assets/images/rocketseat-clone.jpg"),
          github: "https://github.com/Lucas98Fernando/rocketseat-clone-vue",
          href: "https://rocketseatclonevue.netlify.app/",
          title: "Rocketseat Clone",
          description:
            "Clone da página web da Rockeseat, utilizando Vue e Bootstrap Vue.",
        },
        {
          id: 4,
          src: require("../../assets/images/spendings.jpg"),
          github: "https://github.com/Lucas98Fernando/spending-app",
          href: "https://spending-4e16e.web.app/login",
          title: "Spendings",
          description:
            "Aplicação web para controle de despesas, utilizando Vue, Bootstrap e Firebase.",
        },
        {
          id: 5,
          src: require("../../assets/images/tw3-quiz.jpg"),
          github: "https://github.com/Lucas98Fernando/tw3-quiz",
          href: "https://tw3-quiz-lucas98fernando.vercel.app/",
          title: "The Witcher 3 - Quiz",
          description:
            "Quiz sobre The Witcher 3 - O Projeto foi desenvolvido durante a Semana da Imersão Alura - React JS e Next JS.",
        },
        {
          id: 6,
          src: require("../../assets/images/nubank-clone.jpg"),
          github: "https://github.com/Lucas98Fernando/nubank-vue",
          href: "https://github.com/Lucas98Fernando/nubank-vue",
          title: "Nubank clone",
          description:
            "Clone da página web inicial do Nubank, utilizando Vue e Bootstrap Vue.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>

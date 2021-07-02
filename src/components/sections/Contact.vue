<template>
  <div id="contact">
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12">
        <h2 id="title-section" class="mb-3">
          <v-icon color="secondary" class="mr-2" size="40"
            >mdi-console-line</v-icon
          >
          Contato
        </h2>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-card id="card-features" class="text-left py-2 px-2" rounded="xl">
          <v-card-text id="card-content">
            <div class="front-end">
              <div>
                <img
                  class="img-lucas"
                  src="../../assets/images/lucas.png"
                  alt=""
                />
              </div>
              <div>
                <h4>Lucas Fernando</h4>
                <span>Front-end developer</span>
              </div>
            </div>
            <div>
              <p class="mt-4 mb-3">
                <v-icon class="mr-2" color="secondary" size="30"
                  >mdi-email-outline</v-icon
                >
                lucas98fernando@gmail.com
              </p>
              <p class="mt-4">
                <v-icon class="mr-2" color="secondary" size="30"
                  >mdi-map-marker-outline</v-icon
                >
                Recife, PE
              </p>
            </div>
            <v-row class="mt-4">
              <a href="https://github.com/Lucas98Fernando" target="_blank">
                <v-icon color="primary" size="50">mdi-github</v-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-fernando-dev/"
                target="_blank"
              >
                <v-icon color="primary" size="50" class="mx-4"
                  >mdi-linkedin</v-icon
                >
              </a>
              <a
                href="https://www.instagram.com/lucas_fernnando_/"
                target="_blank"
              >
                <v-icon color="primary" size="50">mdi-instagram</v-icon>
              </a>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <img src="../../assets/images/contact.svg" alt="" />
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
#contact {
  .front-end {
    display: flex;
    align-items: center;
  }
  .img-lucas {
    width: 70px;
    margin-right: 1rem;
  }
}
</style>

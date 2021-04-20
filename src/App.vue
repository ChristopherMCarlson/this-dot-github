<template>
  <v-app id="inspire">
    <v-app-bar
      app
      dark
      flat
    >
    <v-icon large>mdi-github</v-icon>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>
      <v-btn
        text
        small
        v-for="link in links"
        :key="link"
      >
        {{ link }}
      </v-btn>

    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols='12'>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Pull Requests',
        'Issues',
        'Marketplace',
        'Explore',
      ],
    }),
  }
</script>
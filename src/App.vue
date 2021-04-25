<template>
  <v-app id="inspire">
    <v-app-bar
      app
      dark
      flat
    >
    <router-link to='home'>
      <v-icon large>mdi-github</v-icon>
    </router-link>
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

    <v-main>
      <v-container>
        <v-row class='justify-space-between'>
          <v-col cols='12' class='text-center'>
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

<style>
  a {
    color: inherit !important;
    text-decoration: none !important;
  }
</style>
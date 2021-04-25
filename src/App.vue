<template>
  <v-app id="inspire">
    <v-app-bar
      app
      dark
      flat
      hide-on-scroll
    >
    <router-link to='home'>
      <v-icon large>mdi-github</v-icon>
    </router-link>
      <v-btn
        text
        small
        v-for="link in links"
        :key="link.title"
        v-on:click='openLink(link.link)'
      >
        {{ link.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-switch
      v-model="$vuetify.theme.dark"
      inset
      label="Toggle Dark Mode"
      ></v-switch>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row class='justify-space-between'>
          <v-col cols='12' class='text-center'>
            <router-view />
          </v-col>
        </v-row>
        <hr />
        <v-row class='justify-space-between mt-1'>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://docs.github.com/en/github/site-policy/github-terms-of-service" target="_blank">Terms</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://docs.github.com/en/github/site-policy/github-privacy-statement" target="_blank">Privacy</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://github.com/security" target="_blank">Security</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://www.githubstatus.com/" target="_blank">Status</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://docs.github.com/" target="_blank">Docs</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <router-link to='home'>
              <v-icon large>mdi-github</v-icon>
            </router-link>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://support.github.com/" target="_blank">Contact Github</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://github.com/pricing" target="_blank">Pricing</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://docs.github.com/" target="_blank">API</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://services.github.com/" target="_blank">Training</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://github.blog/" target="_blank">Blog</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <a class='footer-links' href="https://github.com/about" target="_blank">About</a>
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
        {
          title:'Pull Requests',
          link: 'https://github.com/pulls'},
        {
          title:'Issues',
          link: 'https://github.com/issues'},
        {
          title:'Marketplace',
          link: 'https://github.com/marketplace'},
        {
          title:'Explore',
          link: 'https://github.com/explore'},
      ],
    }),
    methods: {
      openLink(URL){
        console.log(URL)
        window.open(URL, '_blank');
      }
    }
  }
</script>

<style>
  a {
    color: inherit !important;
    text-decoration: none !important;
  }

  .footer-links{
    font-size: 0.7rem;
    color: cornflowerblue !important;
  }
</style>
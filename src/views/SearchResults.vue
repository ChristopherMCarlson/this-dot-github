<template>
  <v-container height='80vh'>
    <v-row class='justify-space-around mt-5' align='center'>
      <v-col cols='8' class='text-start'>
        <p>{{searchResults.total_count}} user(s)</p>
      </v-col>
      <v-col cols='8' class='text-center' v-for='result in searchResults.items' :key="result.id">
        <v-row>
          <v-col cols='1'>
            <v-avatar size="36">
              <img
                :src="result.avatar_url"
                alt="John"
              >
            </v-avatar>
          </v-col>
          <v-col cols='10' class='text-start'>
            <a :href='result.html_url'>{{result.login}}</a>
          </v-col>
          <v-col cols='1' class='text-center'>
            <v-btn>Follow</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data:() => ({

    }),
    computed: {
      searchResults() {
        return this.$store.state.searchResults
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
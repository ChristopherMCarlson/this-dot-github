<template>
  <v-container height='80vh'>
    <v-row class='justify-space-around mt-5' align='center'>
      <v-col cols='8' class='text-center' v-for='result in searchResults.items' :key="result.id">
        <p>{{result.html_url}}</p>
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
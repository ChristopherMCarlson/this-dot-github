<template>
  <v-container height='80vh'>
    <v-row class='justify-space-around mt-5' align='center' v-if='searchResults'>
      <v-col cols='8' class='text-start'>
        <p>{{searchResults ? (searchResults.total_count &lt; 1000 ? searchResults.total_count : 1000) : 0}} user(s)</p>
      </v-col>
      <v-col cols='8' class='text-center' v-for='result in searchResults.items' :key="result.id">
        <v-row class='mb-2'>
          <v-col cols='1'>
            <v-avatar size="36">
              <img
                :src="result.avatar_url"
                alt="John"
              >
            </v-avatar>
          </v-col>
          <v-col cols='10' class='text-start'>
            <a :href='result.html_url' target='_blank'>{{result.login}}</a>
          </v-col>
          <v-col cols='1' class='text-start'>
            <v-btn>Follow</v-btn>
          </v-col>
        </v-row>
        <hr />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            v-model="page"
            class="my-4"
            :length="searchResults ? (searchResults.total_count <= 1000 ? (Math.ceil(searchResults.total_count/per_page)) : 100) : 1"
          ></v-pagination>
        </v-container>
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
      page: {
        get: function (){
          return parseInt(this.$route.query.page)
        },
        set: function (newPage){
        var searchObject = {
          searchString: this.$route.query.q,
          per_page: this.$route.query.per_page,
          pageNumber: newPage 
        }
        this.$store.dispatch('searchUsers', searchObject);
        }
      },
      per_page() {
        return parseInt(this.$route.query.per_page)
      }
    },
    created: function(){
      if(!this.$store.state.searchResults){
        console.log('No Search Results!')
        var searchObject = {
          searchString: this.$route.query.q,
          per_page: this.$route.query.per_page,
          pageNumber: this.$route.query.page 
        }
        this.$store.dispatch('searchUsers', searchObject);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
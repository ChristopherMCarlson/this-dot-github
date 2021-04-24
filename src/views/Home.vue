<template>
  <v-container height='80vh'>
    <v-row class='justify-space-around mt-5' align='center'>
      <v-col cols='8' class='text-start'>
        <h2>
          <v-icon>mdi-magnify</v-icon> Search more than 553M issues
        </h2>
      </v-col>
      <v-col cols='8' class='text-center'>
        <v-row class='justify-center'>
          <v-form v-on:submit.prevent='searchUsers'>
            <v-col cols='11'>
              <v-text-field
                label="Search Github"
                placeholder="Search Github"
                single-line
                outlined
                v-model = 'searchString'
              ></v-text-field>
            </v-col>
            <v-col cols='1'>
              <v-btn min-height='56px' type='submit'>Search</v-btn>
            </v-col>
          </v-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data:() => ({
      searchString: '',
    }),
    methods: {
      searchUsers: function(){
        var searchObject = {
          searchString: this.searchString,
          per_page: 10,
          pageNumber: 1
        }
        this.$store.dispatch('searchUsers', searchObject);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
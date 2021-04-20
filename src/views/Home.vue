<template>
  <v-container height='80vh'>
    <v-row class='justify-space-around' align='center'>
      <v-col cols='8' class='text-start'>
        <h3>
          <v-icon>mdi-magnify</v-icon> Search more than 553M issues
        </h3>
      </v-col>
      <v-col cols='8' class='text-center'>
        <v-row class='justify-center'>
          <v-col cols='11'>
            <v-text-field
              label="Search Github"
              placeholder="Search Github"
              single-line
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols='1'>
            <v-btn min-height='56px'>Search</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'


Vue.use(Vuex)

const apiUrl = 'https://api.github.com'

const gitAPI = axios.create({
  baseURL: apiUrl,
  timeout: 3000
});
export default new Vuex.Store({
  state: {
    searchResults: [],
  },
  mutations: {
    setSearchResults(state, results){
      state.searchResults = results;
    },
  },
  actions: {
    searchUsers({commit}, searchString){
      console.log(searchString)
      gitAPI.get('/search/users?q=' + searchString)
        .then(res => {
          commit('setSearchResults', res.data);
          console.log(res.data);
          router.push({ name: 'searchResults' })
        });
    }
  },
  modules: {
  }
})

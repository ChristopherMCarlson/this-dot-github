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
    searchResults: null,
    searchString: '',
    page: 1,
    per_page: 10
  },
  mutations: {
    setSearchResults(state, results){
      state.searchResults = results;
    },
    setSearchString(state, string){
      state.searchString = string;
    },
    setPageNumber(state, number){
      state.page = number;
    },
    setPerPage(state, number){
      state.per_page = number;
    }
  },
  actions: {
    searchUsers({commit}, searchObject){
      console.log(searchObject);
      gitAPI.get('/search/users?q=' + searchObject.searchString + '&per_page=' + searchObject.per_page + '&page=' + searchObject.pageNumber)
        .then(res => {
          commit('setSearchResults', res.data);
          commit('setSearchString', searchObject.searchString);
          commit('setPageNumber', searchObject.pageNumber);
          commit('setPerPage', searchObject.per_page);
          router.push({ name: 'searchResults', query: {q: searchObject.searchString, per_page: searchObject.per_page, page: searchObject.pageNumber} })
        });
    },
  },
  modules: {
  }
})

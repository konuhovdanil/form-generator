import Vue from 'vue'
import Vuex from 'vuex'
import schema from "@/store/schema";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    schema
  }
})

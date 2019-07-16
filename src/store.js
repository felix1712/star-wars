import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: { // data
		isLoading: false,
	},
	getters: { // computed property
	},
	mutations: { // change data state
		ACTION_LOADER(state, value) {
			state.isLoading = value;
		},
	},
	actions: { // methods property
		actionLoader({commit}, value){
			commit('ACTION_LOADER', value);
		}
		// make the call
		// call mutations
	},
});

import { BlogModule } from './blogModule';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({});
export const blogModule = new BlogModule(store);

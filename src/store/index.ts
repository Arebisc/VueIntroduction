import Vue from 'vue';
import Vuex from 'vuex';
import { BlogModule } from './blogModule';

Vue.use(Vuex);

export const store = new Vuex.Store({});
export const blogModule = new BlogModule({ name: 'BlogModule', store: store });

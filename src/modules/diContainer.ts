import 'reflect-metadata';
import { vueInversifyPlugin } from '@vanroeybe/vue-inversify-plugin';
import { Container } from 'inversify';
import Vue from 'vue';
import { BloggingModule } from './bloggingModule';

export const registerContainer = () => {
    const container = new Container();

    container.load(BloggingModule);

    Vue.use(vueInversifyPlugin(container));
};

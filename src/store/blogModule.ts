import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules';
import axios from 'axios';
import { Store } from 'vuex';

export interface Blog {
    id: number;
    text: string;
    published: boolean;
}

@Module
export class BlogModule extends VuexModule {
    public constructor(store: Store<any>) {
        super({
            name: 'BlogModule',
            store,
        });
    }

    private loadingStatus = 'notLoading';
    private blogPosts: Blog[] = [];

    public get publishedPosts() {
        return this.blogPosts;
    }

    @Mutation
    private setLoadingStatus(newStatus: string) {
        this.loadingStatus = newStatus;
    }

    @Mutation
    private setPosts(posts: Blog[]) {
        this.blogPosts = posts;
    }

    @Action
    public getPosts() {
        this.setLoadingStatus('loading');
        axios.get('/api/blog').then(response => {
            this.setLoadingStatus('notLoading');
            this.setPosts(response.data.posts);
        });
    }
}

import { BlogPost } from './../models/blogPost';
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules';
import axios from 'axios';
import { Store } from 'vuex';


@Module
export class BlogModule extends VuexModule {
    public constructor(store: Store<any>) {
        super({
            name: nameof<BlogModule>(),
            store
        });
    }

    private posts: BlogPost[] = [];

    public get postsGetter() {
        return this.posts;
    }

    @Action
    public async loadPosts() {
        const url = 'http://localhost:3000';
        const response = await axios.get<BlogPost[]>(url, {
            headers: { "Access-Control-Allow-Origin": "*" },
            withCredentials: false
        });

        if (response.status === 200) {
            const posts = response.data;
            this.setPosts(posts);
        }
        else {
            console.error('Cannot load posts');
        }
    } 

    @Mutation
    private setPosts(posts: BlogPost[]) {
        this.posts = posts;
    }
}

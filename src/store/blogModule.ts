import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules';
import axios from 'axios';
import { FooInterface } from '@/abstract/bloggingModule/FooInterface';
import { $inject } from '@vanroeybe/vue-inversify-plugin';

export interface Blog {
    id: number;
    text: string;
    published: boolean;
}

@Module
export class BlogModule extends VuexModule {
    @$inject(nameof<FooInterface>())
    private readonly foo!: FooInterface;

    private loadingStatus = 'notLoading';
    private blogPosts: Blog[] = [
        { id: 1, text: 'text blog 1', published: true },
        { id: 2, text: 'text blog 2', published: true },
        { id: 3, text: 'text blog 3', published: false },
    ];

    public get publishedPosts() {
        return this.blogPosts.filter(x => x.published);
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
    public async getPosts() {
        this.setLoadingStatus('loading');
        this.foo.bar();
        try {
            const response = await axios.get<Blog[]>(
                'http://localhost:3000/api/blog'
            );
            this.setPosts(response.data);
        } catch (err) {
            // display error message
        } finally {
            this.setLoadingStatus('notLoading');
        }
    }
}

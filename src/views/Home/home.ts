import { BlogPost } from './../../models/blogPost';
import { Vue, Component } from 'vue-property-decorator';
import { blogModule } from '@/store/index';
import BlogPostComponent from '@/components/BlogPostComponent.vue';

@Component({
    components: {
        BlogPostComponent
    }
})
export default class Home extends Vue {
    private dialog = false;
    private blogPost: BlogPost = {
        author: undefined,
        published: undefined,
        id: undefined,
        text: undefined,
        title: undefined
    };

    private tableHeaders = [
        { text: 'Title', value: 'title' },
        { text: 'Text snippet', value: 'text' },
        { text: 'Author', value: 'author' },
        { text: 'Published', value: 'published' },
        {
            text: 'Actions',
            value: 'actions',
            align: 'center'
        },
    ];

    private get tableData() {
        return blogModule.postsGetter;
    }

    private async created() {
        await blogModule.loadPosts();
    }

    private showDialog() {
        this.dialog = true;
    }

    private async saveNewPost() {
        if (this.blogPost.id) {
            await blogModule.editPost(this.blogPost);
        }
        else {
            await blogModule.saveNewPost(this.blogPost);
        }
        this.dialog = false;
    }

    private editPost(post: BlogPost) {
        this.blogPost = post;
        this.dialog = true;
    }
}


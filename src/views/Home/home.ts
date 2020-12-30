import { Vue, Component } from 'vue-property-decorator';
import { blogModule } from '@/store/index';

@Component
export default class Home extends Vue {
    private tableHeaders = [
        { text: 'Title', value: 'title' },
        { text: 'Text snippet', value: 'text' },
        { text: 'Author', value: 'author' },
        { text: 'Published', value: 'published' }
    ];

    private get tableData() {
        return blogModule.postsGetter;
    }

    private async created() {
        await blogModule.loadPosts();
    }
}


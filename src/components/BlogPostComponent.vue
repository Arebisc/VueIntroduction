<template>
    <div class="blogPost">
        <v-form>
            <v-text-field
                v-model="blogModel.title"
                label="Title"
                required
            ></v-text-field>
            <v-textarea label="Text" v-model="blogModel.text"></v-textarea>
            <v-text-field
                v-model="blogModel.author"
                label="Author"
                required
            ></v-text-field>
            <v-switch
                v-model="blogModel.published"
                label="Published?"
            ></v-switch>
        </v-form>
    </div>
</template>

<script lang="ts">
import { BlogPost } from '@/models/blogPost';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BlogPostComponent extends Vue {
    @Prop()
    private blogModel!: BlogPost;
}
</script>

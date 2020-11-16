<template>
    <div class="home">
        <button @click="loadBlogPosts">Get posts</button>
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{ post.text }}
            </li>
        </ul>
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { blogModule } from '@/store';

@Component({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {
    private get posts() {
        return blogModule.publishedPosts;
    }

    private async loadBlogPosts() {
        return await blogModule.getPosts();
    }
}
</script>

<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>{{ reversedMessage }}</h2>
        <button @click="changeMessage">Change</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
    private sampleMessage = 'message';

    private get reversedMessage() {
        return this.sampleMessage
            .split('')
            .reverse()
            .join('');
    }

    private changeMessage() {
        this.sampleMessage = 'other';
    }
}
</script>

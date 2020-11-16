<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>{{ reversedMessage }}</h2>
        <button @click="changeMessage">Change</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sampleMessage: 'message',
        };
    },
    computed: {
        reversedMessage() {
            return this.sampleMessage
                .split('')
                .reverse()
                .join('');
        },
    },
    methods: {
        changeMessage() {
            this.sampleMessage = 'other';
        },
    },
};
</script>

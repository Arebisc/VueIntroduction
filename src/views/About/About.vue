<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>{{ reversedMessage }}</h2>
        <button @click="changeMessage">Change</button>
        <button @click="callBar">Call bar</button>
    </div>
</template>

<script lang="ts" src="./about"></script>

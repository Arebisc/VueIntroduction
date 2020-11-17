<template>
    <div>
        <h1>Computed properties vs methods reactivity sample</h1>

        <button @click="a++">Increment A</button>
        <button @click="b++">Increment B</button>

        <h2>A: {{ a }}</h2>
        <h2>B: {{ b }}</h2>

        <h2>A + Age: {{ addToA() }}</h2>
        <h2>B + Age: {{ addToB() }}</h2>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ComputedSample extends Vue {
    private age = 25;
    private a = 0;
    private b = 0;

    private addToA() {
        console.log('AddToA method');
        return this.a + this.age;
    }

    private addToB() {
        console.log('AddToB method');
        return this.b + this.age;
    }

    private get computedA() {
        console.log('Computed A');
        return this.a + this.age;
    }

    private get computedB() {
        console.log('Computed B');
        return this.b + this.age;
    }
}
</script>

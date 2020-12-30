<template>
    <div class="blog">
        <h1>Blog</h1>
        <v-data-table
            :headers="tableHeaders"
            :items="tableData"
            :items-per-page="5"
        ></v-data-table>
    </div>
</template>

<script lang="ts" src="./home"></script>

<template>
    <div class="blog">
        <v-btn @click="showDialog">Add new post</v-btn>
        <v-data-table
            :headers="tableHeaders"
            :items="tableData"
            :items-per-page="5"
        ></v-data-table>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2">
                    Blog Post
                </v-card-title>

                <v-card-text>
                    <blog-post-component
                        :blogModel="blogPost"
                    ></blog-post-component>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="saveNewPost">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" src="./home"></script>

<script>
    import { Suspense } from 'vue';
    import HomePage from './components/home.vue';
    import CompositionPage from './components/composition.vue';
    import OptionPage from './components/option.vue';
    import HalfPage from './components/halfComposition.vue';
    export default {
        components: {
            HomePage,
            CompositionPage,
            OptionPage,
            HalfPage
        },
        data: () => ({
            currentPage: "Home"
        }),
        computed: {
            renderPage() {
                return this.currentPage + "Page"
            }
        },
        methods: {
            showHomePage() {
                this.currentPage = "Home";
            },
            showOptionPage() {
                this.currentPage = "Option";
            },
            showHalf() {
                this.currentPage = "Half"
            },
            showCompositionPage() {
                this.currentPage = "Composition";
            }
        }
    }
</script>

<template>
    <button @click="showHomePage">Home</button><br>
    <button @click="showOptionPage">Switch To Option Page</button><br>
    <button @click="showCompositionPage">Switch To Full Composition</button><br>
    <button @click="showHalf">Switch To Half Composition</button>
    <Suspense timeout="0">
        <!-- <HomePage v-if="currentPage == 'Home'" />
        <UserPage v-else /> -->
        <template #default>
        <component :is="renderPage" timeToWait=1000 />
        </template>
        <template #fallback><p>Please wait...</p></template>
    </Suspense>
</template>

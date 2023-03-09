<script>
    import { Suspense } from 'vue';
    import HomePage from './components/home.vue';
    import CompositionPage from './components/composition.vue';
    import OptionPage from './components/option.vue';
    import HalfPage from './components/halfComposition.vue';
    import ScopedCSSPage from './components/scopedCSS.vue';
    import UnScopedCSSPage from './components/noScopedCSS.vue';
    import CSSBindingPage from './components/cssBinding.vue';
    export default {
        components: {
            HomePage,
            CompositionPage,
            OptionPage,
            HalfPage,
            ScopedCSSPage,
            UnScopedCSSPage,
            CSSBindingPage
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
            },
            showScopedCSS() {
                this.currentPage = "ScopedCSS"
            },
            showNoScopedCSS() {
                this.currentPage = "UnScopedCSS"
            },
            showCSSBinding() {
                this.currentPage = "CSSBinding";
            }
        }
    }
</script>

<template>
    <button @click="showHomePage">Home</button><br>
    <button @click="showOptionPage">Switch To Option Page</button><br>
    <button @click="showCompositionPage">Switch To Full Composition</button><br>
    <button @click="showHalf">Switch To Half Composition</button><br>
    <button @click="showScopedCSS">Switch To Scoped CSS</button><br>
    <button @click="showNoScopedCSS">Switch To UnScoped CSS</button><br>
    <button @click="showCSSBinding">Switch To CSS Binding</button>

    <router-view />
    <Suspense timeout="0">
        <!-- <HomePage v-if="currentPage == 'Home'" />
        <UserPage v-else /> -->
        <template #default>
        <component :is="renderPage" timeToWait=1000 />
        </template>
        <template #fallback><p>Please wait...</p></template>
    </Suspense>
</template>

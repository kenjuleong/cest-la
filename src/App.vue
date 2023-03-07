<script>
    import HomePage from './components/home.vue';
    import UserPage from './components/user.vue';
    export default {
        components: {
            HomePage,
            UserPage
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
            showUserPage() {
                this.currentPage = "User";
            }
        }
    }
</script>

<template>
    <button @click="showHomePage">Home</button>
    <button @click="showUserPage">Switch To User</button>
    <Suspense>
        <!-- <HomePage v-if="currentPage == 'Home'" />
        <UserPage v-else /> -->
        <component :is="renderPage" />
        <template v-slot:fallback><p>Please wait...</p></template>
    </Suspense>
</template>
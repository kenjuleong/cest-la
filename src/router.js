import HomePage from "./views/HomePage.vue";
import TestPage from "./views/TestPage.vue";

export const routes = [
    {
        path: '/',
        component: HomePage
    }, 
    {
        path: '/test',
        component: TestPage
    }
]
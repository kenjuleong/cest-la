<script>
    import { useStore } from "../composables/useStore.js";
    const { incrementLocalStore, localStore, globalStore } = useStore();
    const wait = (wait, data = "Unknown") => new Promise((resolve) => setTimeout(() => resolve(data), wait));
    export default {
        data: () => ({
            message: null,
            localStore,
            globalStore
        }),
        methods: {
            changeMessage() {
                this.message = "This message was displayed after 3 seconds"
            },
            incrementLocalStore
        },
        async created() {
            await wait(3000);
            this.changeMessage()
        }
    }
</script>

<template>
    <h2>This uses option API</h2>
    <p>{{ message }}</p>
    Global: {{ globalStore }} <br>
    Local: {{ localStore }}<br>
    <button @click="incrementLocalStore(10)">Increment Local Store</button>
</template>
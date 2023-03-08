<script setup>
    import { useStore } from "../composables/useStore.js";
    import { toggleBackground,backgroundColor } from "../composables/backgroundColor.js";
    const store = useStore();
</script>
<template>
    <div>
    <h1>This is the homepage</h1>
    Global: {{ store.globalStore }} <br>
    Local: {{ store.localStore }}<br>
    <button @click="store.incrementLocalStore(10)">Increment Local Store</button><br>
    <button @click="toggleBackground">Toggle Background</button>
</div>
</template>

<style scoped>
    div {
        background-color: v-bind(backgroundColor);
        padding: 1em;
        border-radius: 25px;
        height: 200px;
    }
</style>

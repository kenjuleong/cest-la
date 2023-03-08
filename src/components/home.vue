<script setup>
    import { useStore } from "../composables/useStore.js";
    const store = useStore();
</script>
<template>
    <h1>This is the homepage</h1>
    Global: {{ store.globalStore }} <br>
    Local: {{ store.localStore }}<br>
    <button @click="store.incrementLocalStore(10)">Increment Local Store</button>
</template>
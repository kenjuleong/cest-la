<script setup>
        import { toggleBackground,backgroundColor } from "../composables/backgroundColor.js";
</script>
<template>
    <div>
    <h1>This page include css that applies to everything</h1>
    <p>This means whatever css in this component will be visible to app that uses this component</p>
    <button>Test Button</button><br>
    <button @click="toggleBackground">Toggle Background</button>
    </div>
</template>

<style>
    div {
        background-color: v-bind(backgroundColor);
        padding: 1em;
        border-radius: 25px;
    }
    h1 {
        color: grey;
        font-weight: 600;
    }
</style>

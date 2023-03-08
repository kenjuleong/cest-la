<script setup>
    import { ref } from "vue";
    const bgColor = ref("black");
</script>
<template>
    <div>
    <h2>Current Background: {{ bgColor }}</h2>
    <input v-model="bgColor" type="color">
    </div>
</template>

<style scoped>
    div {
        background-color: v-bind(bgColor);
        padding: 1em;
        border-radius: 25px;
        height: 200px;
    }
</style>

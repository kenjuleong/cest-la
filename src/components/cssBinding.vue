<script setup>
    import { ref } from "vue";
    import { toggleBackground,backgroundColor } from "../composables/backgroundColor.js";
    const fontColor = ref("black");
    
</script>
<template>
    <div>
    <h2>Current Font: {{ fontColor }}</h2>
    <input v-model="fontColor" type="color"><br>
    <button @click="toggleBackground">Toggle Background</button>
    </div>


</template>

<style scoped>
    h2 {
        color: v-bind(fontColor);
    }
    div {
        background-color: v-bind(backgroundColor);
        padding: 1em;
        border-radius: 25px;
        height: 200px;
    }
</style>

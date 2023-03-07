<script setup>
    import { ref, reactive } from "vue";
        const wait = (wait, data = "Unknown") => new Promise((resolve) => setTimeout(() => resolve(data), wait));

        const data = reactive({
            message: null
        });
        data.message = await wait(3000, "This page was loaded after 3 seconds");
</script>
<template>
<h2>This uses composition API</h2>
    <p>{{ data.message }}</p>
</template>
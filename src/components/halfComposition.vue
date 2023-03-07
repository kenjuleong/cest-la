<script>
    import { ref, reactive } from "vue";
    const wait = (wait, data = "Unknown") => new Promise((resolve) => setTimeout(() => resolve(data), wait));
    export default {
        async setup() {
            const rf = ref({
                value: null
            });
            const react = reactive({
                age: 20
            });
            rf.value = await wait(3000, "This page was displayed after 3 seconds");
            return {
                rf, // ref only take care of one key value
                react // reactive takes care of multiple keys in an object
            }
        }
    }
</script>

<template>
    <h2>This uses half Composition API</h2>
    <p>{{ react }}</p>
    <p>{{ react.age }}</p>
</template>
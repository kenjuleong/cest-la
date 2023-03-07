<script setup>
    import { ref, reactive } from "vue";
    import { StoreValue } from "../composables/storeValue.js";
    import CFC from "./componentForComposition.vue";
        const wait = (wait, data = "Unknown") => new Promise((resolve) => setTimeout(() => resolve(data), wait));

        const data = reactive({
            message: null
        });
        const props = defineProps({
            timeToWait: {
                type: Number,
                default: 3000
            }
        })
        data.message = await wait(props.timeToWait, `This page was loaded after ${props.timeToWait} ms`);
        const changeStoreValue = () => {
            StoreValue.value = "The Store Value Was Changed In Composition Page"
        }
</script>
<template>
<h2>This uses full composition API</h2>
    <p>{{ data.message }}</p>
    <CFC />
    <h2>The Store Value: {{ StoreValue.value }}</h2>
    <button @click="changeStoreValue">Change Store Value</button>
</template>
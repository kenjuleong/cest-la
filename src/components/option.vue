<script>
    const wait = (wait, data = "Unknown") => new Promise((resolve) => setTimeout(() => resolve(data), wait));
    export default {
        data: () => ({
            message: null
        }),
        methods: {
            changeMessage() {
                this.message = "This message was displayed after 3 seconds"
            }
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
</template>
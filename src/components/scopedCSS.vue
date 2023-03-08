<template>
    <div>
    <h1>This page include css that only applies to this component</h1>
    <button>Test Button</button>
    </div>
</template>

<style scoped>
    div {
        background-color: papayawhip;
        padding: 1em;
        border-radius: 25px;
    }
    h1 {
        color: grey;
        font-weight: 600;
    }

    button {
        padding: 10px;
        border: 0;
        border-radius: 5px;
        color: white;
        background-color: black;
    }
</style>

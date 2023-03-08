<template>
    <div>
    <h1>This page include css that applies to everything</h1>
    <p>This means whatever css in this component will be visible to app that uses this component</p>
    <button>Test Button</button>
    </div>
</template>

<style>
    div {
        background-color: black;
        padding: 1em;
        border-radius: 25px;
    }
    h1 {
        color: grey;
        font-weight: 600;
    }
</style>

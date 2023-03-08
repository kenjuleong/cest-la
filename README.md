# Note

> Need to add `timeout="0"` for the fallback to work
```vue
<Suspense timeout="0">
<AsyncFunction />
<template #fallback>Please wait...</template>
</Suspense>
```

> Use Store Value, create a `.js` file

- `./composables/storevalue.js`
```vue
import { reactive } from "vue";

export const StoreValue = reactive({ value: "Hello" })
```

- `./components/viewStoreValues.vue`
```vue
<script setup>
import { StoreValue } from "../composables/storevalue.js";

function changeStoreValue() {
  StoreValue.value = "New Value"
}
</script>

<template>
{{ StoreValue.value }}
</template>
```

- `./components/viewStoreValueOptionAPI.vue`
```vue
<script>
import { StoreValue } from "../composables/storevalue.js";
export default {
  async setup() {
    return {
      StoreValue
    }
  }
}
</script>
```

```vue
<script>
import { StoreValue } from "../composables/storevalue.js";
export default {
  data: () => ({
    StoreValue
  })
}
</script>
```

> Scoped CSS
This css only applies to the specific component
```vue
<template>
<h1>Hello</h1>
</template>

<style scoped>
h1 {
color: red
}
</style>
```

> CSS Binding
Bind a css value to a defined variable
```vue
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
```

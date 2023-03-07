# Note

> Need to add `timeout="0"` for the fallback to work
```vue
<Suspense timeout="0">
<AsyncFunction />
<template #fallback>Please wait...</template>
</Suspense>
```

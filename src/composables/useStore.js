import { ref } from "vue";

export const globalStore = ref(200);

export function useStore() {
    const localStore = ref(100);

    const incrementLocalStore = (amount = 10) => {
        localStore.value += amount
    } 
    return {
        globalStore,
        localStore,
        incrementLocalStore
    }
}
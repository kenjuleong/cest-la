import { ref } from "vue";
export const backgroundColor = ref("black");

export function toggleBackground () {
   backgroundColor.value = backgroundColor.value == "black" ? "white" : "black";
}
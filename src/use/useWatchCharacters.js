import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newValue) => {
    newValue.length === maxChars ? alert(`only ${maxChars} chars`) : "";
  });
}

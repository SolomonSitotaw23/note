<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const textAreaRef = ref(null);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Add a new note here ...",
  },
  label: {
    type: String,
    default: "Add Notes",
  },
});
const emit = defineEmits(["update:modelValue"]);
const focusTextArea = () => {
  textAreaRef.value.focus();
};
defineExpose({
  focusTextArea,
});
</script>

<template>
  <div class="col-span-2 m-8 p-3 rounded-lg border border-blue-50">
    <label
      for="message"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >{{ label }}</label
    >
    <textarea
      id="message"
      v-model="modelValue"
      rows="4"
      @input="$emit('update:modelValue', modelValue)"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
      ref="textAreaRef"
      v-autofocus
      maxlength="100"
    ></textarea>
    <div class="border-t-gray-300 mt-3 flex items-end w-full justify-end">
      <slot name="buttons" />
    </div>
  </div>
</template>

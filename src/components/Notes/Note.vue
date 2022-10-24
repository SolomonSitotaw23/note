<script setup>
import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";
const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["handleDelete"]);

const characterLength = computed(() => {
  let length = props.note.content.length;
  return length > 1 ? `${length} characters ` : `${length} character `;
});

const modals = reactive({
  deleteNote: false,
});
</script>
<template>
  <div
    class="p-6 flex flex-col m-8 max-w-sm bg-white rounded-lg border md:col-span-1 col-span-2 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <h3
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Noteworthy technology acquisitions 2021
    </h3>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ note.content }}
    </p>
    <div class="text-right text-gray-400">
      <small>{{ characterLength }} </small>
    </div>
    <div class="border-t-gray-300 mt-3 flex items-end w-full justify-end">
      <RouterLink
        type="button"
        :to="`/edit/${props.note.id}`"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
      >
        Edit
      </RouterLink>
      <button
        type="button"
        @click="modals.deleteNote = true"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
      >
        Delete
      </button>
    </div>
  </div>
  <ModalDeleteNote
    v-if="modals.deleteNote"
    v-model="modals.deleteNote"
    :noteId="note.id"
  />
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";

const storeNotes = useStoreNotes();

const noteContent = ref("");

const route = useRoute();
const router = useRouter();

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClick = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
<template>
  <div
    class="notes grid md:grid-cols-2 items-center rounded-lg border border-blue-300 p-8 w-full md:w-3/4 lg:w-1/2"
  >
    <h1 class="text-center">Edit</h1>

    <AddEditNote
      v-model="noteContent"
      placeholder="Edit your note.."
      label="Edit note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          type="button"
          @click="handleSaveClick"
          :disabled="!noteContent"
          class="disabled:bg-gradient-to-r disabled:from-gray-500 disabled:via-gray-600 disabled:to-gray-700 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Save Note
        </button>
        <button
          @click="$router.back()"
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Cancel
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

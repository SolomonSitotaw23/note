<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import ViewEditNote from "@/components/Notes/AddEditNote.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";
const newNote = ref("");
const storeNotes = useStoreNotes();
const addEditNoteRef = ref(null);

const addNote = () => {
  let note = {
    id: uuidv4(),
    content: newNote.value,
  };
  storeNotes.addNote(note);
  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};
useWatchCharacters(newNote);
</script>

<template>
  <div class="grid grid-cols-2 justify-items-center align-items-center">
    <div
      class="notes w-full mx-10 px-8 items-center flex col-span-2 rounded-lg"
    >
      <AddEditNote
        v-model="newNote"
        class="w-full md:w3/4 lg:w1/2"
        ref="addEditNoteRef"
      >
        <template #buttons>
          <button
            type="button"
            @click="addNote"
            :disabled="!newNote"
            class="disabled:bg-gradient-to-r disabled:from-gray-500 disabled:via-gray-600 disabled:to-gray-700 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </template>
      </AddEditNote>
    </div>
    <Note v-for="note in storeNotes.notes" :key="note" :note="note" />
  </div>
</template>
<script setup></script>

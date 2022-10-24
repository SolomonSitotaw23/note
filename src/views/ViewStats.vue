<script setup>
import { useStoreNotes } from "@/stores/storeNotes";
import { ref } from "vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";
const storeNotes = useStoreNotes();

const loveNotes = ref("");

useWatchCharacters(loveNotes, 50);
</script>

<template>
  <div
    class="stats flex items-center flex-col text-left md:w-3/4 lg:w-1/2 w-full mx-8 my-5"
  >
    <h1 class="mb-4 text-5xl font-lexend self-start font-semibold">Stats</h1>

    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6 rounded-tl-lg">Stat</th>
            <th scope="col" class="py-3 px-6 rounded-tr-lg">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Number of Notes
            </th>
            <td class="py-4 px-6">{{ storeNotes.totalNotesCount }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="font-semibold text-gray-900 dark:text-white">
            <th scope="row" class="py-3 px-6 text-base">
              Number of Character (of all notes)
            </th>
            <td class="py-3 px-6">{{ storeNotes.totalCharacters }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <form class="md:w-1/2 m-8">
      <label
        for="default-comment"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >Search</label
      >
      <div class="relative">
        <div class="w-full flex items-center">
          <HeartIcon class="w-4 text-slate-400 m-3 absolute" />
          <input
            v-model="loveNotes"
            type="search"
            id="default-comment"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Do you love Notes app ?"
            required
            v-autofocus
          />
        </div>

        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          submit
        </button>
      </div>
    </form>
  </div>
</template>

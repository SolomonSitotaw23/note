<script setup>
import { ref } from "vue";

const notes = ref([
  {
    id: "id1",
    content:
      "Here are the biggest enterprise technology acquisitions of 2021 so far reverse chronological order.",
  },
  {
    id: "id2",
    content: "acquisitions of 2021 so far reverse chronological order.",
  },
  {
    id: "id3",
    content:
      "Here are the biggest enterprise technology acquisitions of 2021 so far reverse chronological order.",
  },
]);
</script>

<template>
  <div class="notes grid md:grid-cols-2 items-center">
    <div class="col-span-2 m-8 p-3 rounded-lg border border-blue-50">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >Your Note</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="note ..."
      ></textarea>
      <div class="border-t-gray-300 mt-3 flex items-end w-full justify-end">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Submit
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Cancel
        </button>
      </div>
    </div>

    <div
      class="p-6 m-8 max-w-sm bg-white rounded-lg border md:col-span-1 col-span-2 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      v-for="note in notes"
      :key="note.id"
    >
      <h3
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions 2021
      </h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ note.content }}
      </p>

      <div class="border-t-gray-300 mt-3 flex items-end w-full justify-end">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Edit
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>

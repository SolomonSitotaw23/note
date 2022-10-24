<script setup>
import { ref } from "vue";
const isNavBarActive = ref(true);
</script>
<template>
  <nav
    class="px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-blue-50"
  >
    <div
      class="container flex flex-wrap xl:justify-around justify-between items-center lg:w-1/2 mx-auto"
    >
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >Notes</span
      >
      <div>
        <div class="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            @click="isNavBarActive = !isNavBarActive"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="absolute md:relative right-0 justify-between w-40 md:flex md:w-auto md:order-1"
          :class="{ hidden: isNavBarActive }"
        >
          <ul
            class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink
                to="/"
                @click="isNavBarActive = !isNavBarActive"
                class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white"
                active-class="md:text-blue-700 bg-blue-700 text-white"
                >Notes</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/stats"
                @click="isNavBarActive = !isNavBarActive"
                class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
                active-class="md:text-blue-700 bg-blue-700 text-white"
                >Stats</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

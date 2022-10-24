<template>
  <NavBar></NavBar>
  <div class="flex justify-center">
    <router-view></router-view>
  </div>
</template>
<script setup>
/*
imports 
*/
import NavBar from "@/components/Layout/NavBar.vue";
</script>

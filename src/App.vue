<script>
import Navbar from "./components/layouts/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<template>
  <div id="app" class="mx-10 lg:mt-10 mt-20">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<style>
body {
  background: #ffff;
}
</style>

<template>
  <div class="app-layout">
    <app-header />
    <app-main />
  </div>
</template>

<script>
import { AppHeader, AppMain } from "./components";
export default {
  components: {
    AppHeader,
    AppMain
  }
};
</script>

<style lang="scss">
</style>
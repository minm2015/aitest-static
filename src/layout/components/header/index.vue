<template>
  <div class="app-header">
    <header-logo />
    <header-menu />
    <header-tool />
    <header-user />
  </div>
</template>

<script>
import { HeaderLogo, HeaderMenu, HeaderTool, HeaderUser } from "./components";
export default {
  components: {
    HeaderLogo,
    HeaderMenu,
    HeaderTool,
    HeaderUser
  }
};
</script>

<style>
</style>
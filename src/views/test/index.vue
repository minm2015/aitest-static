<template>
  <div class="test-container">
    <bl-sidebar :defaultSelectedKeys="['1']" :menus="menus" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          key: "1",
          icon: {
            type: 1,
            value: "bl-test-component"
          },
          title: "组件",
          router: "/test/module"
        },
        {
          key: "2",
          icon: {
            type: 1,
            value: "bl-test-api"
          },
          title: "API",
          router: "/test/api"
        },
        {
          key: "3",
          icon: {
            type: 1,
            value: "bl-test-auto"
          },
          title: "自动化",
          router: "/test/api"
        },
        {
          key: "4",
          icon: {
            type: 0,
            value: "experiment"
          },
          title: "实验室",
          router: "/test/api"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
</style>
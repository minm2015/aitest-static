<template>
  <div class="app-menu">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="index">
        <a-icon type="desktop" />首页
      </a-menu-item>
      <a-menu-item key="welcome">
        <a-icon type="read" />工作台
      </a-menu-item>
      <a-menu-item key="project">
        <a-icon type="profile" />项目
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="select" />通用
        </span>
        <a-menu-item key="setting:1">
          <a-icon type="experiment" />测试
        </a-menu-item>
        <a-menu-item key="setting:2">
          <a-icon type="dashboard" />度量
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["welcome"]
    };
  }
};
</script>
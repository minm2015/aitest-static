<template>
  <div class="module-right-sidebar">
    <a-drawer
      title="操作历史"
      placement="right"
      @close="onClose"
      :visible="visible && activeIndex == 0"
      wrapClassName="module-drawer"
    >
      <p>操作历史</p>
    </a-drawer>
    <a-drawer
      title="版本"
      placement="right"
      @close="onClose"
      :visible="visible && activeIndex == 1"
      wrapClassName="module-drawer"
    >
      <p>版本</p>
    </a-drawer>
    <div class="right-sidebar-menu">
      <div class="menu-item" v-for="(item, index) in menus" :key="index" @click="showDrawer(index)">
        <span :class="activeIndex == index ? 'item-active': ''">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 999,
      visible: false,
      menus: [] //{ name: "历史记录" }, { name: "版本" }
    };
  },
  methods: {
    showDrawer(index) {
      this.activeIndex = index;
      this.visible = true;
    },
    onClose() {
      this.activeIndex = 999;
      this.visible = false;
      console.log(this.visible);
    },
    drawer() {
      return document.getElementsByClassName("module-right-sidebar")[0];
    }
  }
};
</script>

<style lang="scss">
.module-right-sidebar {
  height: inherit;
  background-color: #2c2f40;
  font-size: 12px;
  .right-sidebar-menu {
    height: inherit;
    color: #f0f0f0;
    .menu-item {
      position: relative;
      width: 40px;
      writing-mode: vertical-rl;
      padding: 15px 12px;
      cursor: pointer;
      span {
        &.item-active {
          color: #1890ff;
          &:before {
            height: 100%;
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            display: block;
            background-color: #1890ff;
          }
        }
      }
    }
  }
}
.module-drawer {
  top: 125px;
  right: 40px;
  .ant-drawer-mask {
    width: 0;
    right: 0;
  }
  &.ant-drawer-open {
    width: auto;
    .ant-drawer-content-wrapper {
      right: 40px;
    }
  }
}
</style>
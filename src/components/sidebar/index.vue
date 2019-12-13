<template>
  <div :class="className">
    <div :class="buttonClass">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapsed" />
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      :defaultSelectedKeys="defaultSelectedKeys"
      :inlineCollapsed="collapsed"
    >
      <a-menu-item v-for="item in menus" :key="item.key">
        <router-link :to="item.router">
          <a-icon v-if="item.icon.type == 0" :type="item.icon.value" />
          <bl-icon v-else :type="item.icon.value" />
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: false
    },
    defaultSelectedKeys: {
      type: Array,
      required: false
    },
    buttonClass: {
      type: String,
      default: "flexible-button"
    },
    className: {
      type: String,
      default: "bl-sidebar-nav-menu"
    }
  },
  components: {},
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style lang="scss">
.bl-sidebar-nav-menu {
  background-color: #1e202d;
  color: #e0e0e0;
  > .flexible-button {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    &:hover {
      color: #f0f0f0;
    }
  }
  > .ant-menu {
    background-color: #1e202d;
    > .ant-menu-item-active,
    > .ant-menu-item-selected {
      background-color: #3a3d51 !important;
      color: white;
    }
    .ant-menu-item {
      font-size: 12px !important;
    }
    .ant-menu-item-selected:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #1890ff;
    }
  }
  > .ant-menu-inline-collapsed {
    // 菜单收起
    width: auto;
    > .ant-menu-item {
      padding: 0 15px !important;
    }
  }
}
</style>
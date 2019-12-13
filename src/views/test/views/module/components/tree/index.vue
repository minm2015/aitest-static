<template>
  <div :class="className">
    <a-tree
      :treeData="treeData"
      showIcon
      @replaceFields="replaceFields"
      :loadData="onLoadData"
      @rightClick="rightClick"
      @select="select"
    >
      <a-icon type="down" slot="switcherIcon" />
      <bl-icon type="bl-folder" slot="folder" />
      <bl-icon type="bl-file-sh" slot="shell" />
      <bl-icon type="bl-file-py" slot="python" />
      <bl-icon type="bl-leanRunner_winapp-icon-green" slot="httpRunner" />
    </a-tree>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: "module-box-tree"
    },
    type: {
      type: Number,
      default: 1
    },
    treeData: {
      type: Array,
      required: true
    },
    onLoadData: {
      type: Function,
      required: true
    },
    replaceFields: {
      type: Object,
      default() {
        return {
          key: "id"
        };
      }
    },
    rightClick: {
      type: Function,
      // eslint-disable-next-line no-unused-vars
      default: e => {}
    },
    select: {
      type: Function,
      // eslint-disable-next-line no-unused-vars
      default: (selectedKeys, e) => {}
    }
  },
  mounted() {},
  watch: {},
  data() {
    return {};
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
  }
};
</script>

<style lang="scss">
.module-box-tree {
  .ant-tree {
    .ant-tree-node-content-wrapper,
    .ant-tree-switcher {
      color: #f0f0f0 !important;
    }
    .ant-tree-node-selected {
      background-color: #3a3d51 !important;
    }
    .ant-tree-iconEle {
      font-size: 18px;
      width: 28px;
    }
    .ant-tree-node-content-wrapper {
      //min-width: 160px;
      &:hover {
        background-color: #2c2f40;
      }
    }
    li {
      padding: 0;
      margin: 0;
      > span {
        height: 28px;
        line-height: 28px;
        font-size: 12px;
        margin-bottom: 1px;
        padding: 0;
        > span {
          height: inherit;
          line-height: inherit;
        }
      }

      > span:nth-child(2) {
        width: calc(100% - 28px);
        border-radius: 0%;
      }
    }
  }
  .tree-root {
    .ant-tree-switcher {
      visibility: hidden;
    }
    > .ant-tree-switcher {
      visibility: visible;
    }
    .tree-switcher > .ant-tree-switcher {
      visibility: visible;
    }
    > span {
      background-color: #3a3d51;
    }
    > span:nth-child(2) {
      &:hover {
        background-color: #3a3d51;
      }
      > span:first-child {
        width: 0;
        height: 0;
      }
      .ant-tree-title {
        color: #f0f0f0;
      }
    }
  }
}
</style>
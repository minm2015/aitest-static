<template>
  <div class="bl-leftbox">
    <div class="leftbox-header">
      <div class="header-top">
        <p>{{title}}</p>
        <div class="top-last-btm">
          <slot name="top-last-btm"></slot>
        </div>
      </div>
      <div class="header-bottom">
        <a-input :placeholder="placeholder" size="small" v-model="content" @pressEnter="onsearch">
          <a-icon slot="prefix" type="filter" />
        </a-input>
      </div>
    </div>
    <div class="leftbox-body">
      <slot name="body-block"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    topenums: {
      type: Array
    },
    onsearch: {
      type: Function,
      default: function(e) {
        console.log(e);
      }
    },
    placeholder: {
      type: String,
      default: "输入查找内容"
    }
  },
  data() {
    return {
      content: ""
    };
  }
};
</script>

<style lang="scss">
.bl-leftbox {
  color: #f0f0f0;
  background-color: #1e202d;
  font-size: 12px;
  margin: 0 7px;
  height: inherit;
  padding-right: 8px;
  .leftbox-header {
    padding-left: 5px;
    .header-top {
      line-height: 32px;
      display: flex;
      > p {
        flex: 1;
        font-weight: bold;
        margin: 0;
      }
      .top-last-btm {
        font-size: 16px;
        > i {
          margin: 0 5px;
          cursor: pointer;
        }
        i:last-child {
          margin-right: 0;
        }
      }
    }
    .header-bottom {
      padding: 7px 0;
      .ant-input-prefix {
        color: #f0f0f0;
      }
      .ant-input {
        font-size: 12px;
        background-color: #000;
        border-radius: 1px;
        color: #f0f0f0;
      }
    }
  }
  .leftbox-body {
    height: calc(100% - 120px);
    overflow: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 0px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 8px;
      background-color: #3a3d51;
    }
  }
}
</style>
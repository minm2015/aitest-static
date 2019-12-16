<template>
  <div class="module-right-box">
    <a-tabs :activeKey="activeKey" type="card">
      <a-tab-pane v-for="item in items" :key="item.id.toString()">
        <div slot="tab" class="box-top">
          <div class="top-left">
            <span class="left-icon">
              <bl-icon v-if="item.type == 3" type="bl-file-py" />
              <bl-icon v-if="item.type == 4" type="bl-file-sh" />
            </span>
            <span class="left-title" @click="tabClick(item)">
              <a-tooltip placement="topLeft">
                <template slot="title">
                  <span>{{item.title}}</span>
                </template>
                {{item.title}}
              </a-tooltip>
            </span>
          </div>
          <div class="top-right-close">
            <span @click="closeClick(item)">
              <bl-icon type="bl-guanbi1" />
            </span>
          </div>
        </div>
        <div class="box-bottom">
          <div class="box-btn">
            <span v-if="item.type == 3">
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>保存</span>
                </template>
                <a-icon type="save" />
              </a-tooltip>
            </span>
            <span>
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>提交</span>
                </template>
                <a-icon type="cloud-upload" />
              </a-tooltip>
            </span>
            <span>
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>测试运行</span>
                </template>
                <a-icon type="play-circle" />
              </a-tooltip>
            </span>
            <span>
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>重新加载</span>
                </template>
                <a-icon type="reload" />
              </a-tooltip>
            </span>
          </div>
          <div class="box-content">
            <div class="content-left">
              <a-spin :spinning="item.loading" class="loading" size="large" tip="加载中...">
                <bl-ide class="bl-ide-style-default" :current="item" />
              </a-spin>
            </div>
            <side-bar />
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import SideBar from "./sidebar/index";
export default {
  components: {
    SideBar
  },
  methods: {
    tabClick(item) {
      this.$emit("tabClick", item);
    },
    closeClick(item) {
      this.$emit("closeClick", item);
    }
  },
  props: {
    activeKey: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style lang="scss">
.module-right-box {
  &,
  .ant-tabs,
  .ant-tabs-content,
  .ant-tabs-tabpane,
  .box-bottom,
  .box-content {
    height: 100%;
  }
  .ant-tabs-nav-container {
    height: 35px !important;
    background-color: #1e202d !important;
  }
  .ant-tabs-bar {
    margin: 0px;
    border-color: #1e202d;
  }
  .ant-tabs-tab {
    line-height: 33px !important;
    padding: 0 0 1px 0 !important;
    border-radius: 0% !important;
    border-right: 0 !important;
    background-color: #1e202d !important;
    border-color: #1e202d !important;
    margin-right: 0 !important;
    &::before {
      content: "";
      width: 1px;
      height: 13px;
      position: absolute;
      top: 10px;
      right: 0;
      background: #3a3d51;
    }
    &.ant-tabs-tab-active {
      background-color: #3a3d51 !important;
      border-color: #3a3d51 !important;
      margin-left: -1px !important;
      .top-right-close {
        visibility: visible;
      }
    }
    .top-right-close {
      visibility: hidden;
    }
    &:hover {
      .top-right-close {
        visibility: visible;
      }
    }
  }
  .box-top {
    display: flex;
    .top-left {
      display: flex;
      padding-left: 10px;
      > span {
        display: block;
      }
      .left-icon {
        font-size: 16px;
        width: 16px;
      }
      .left-title {
        width: 130px;
        font-size: 12px;
        transform: scale(0.9);
        color: #f0f0f0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .ant-tooltip-open {
          font-size: 12px !important;
          transform: scale(0.5);
        }
      }
    }
  }
  .box-bottom {
    .box-btn {
      height: 40px;
      color: #e0e0e0;
      line-height: 20px;
      padding: 10px 20px;
      background-color: #3a3d51 !important;
      > span {
        margin: 0 15px;
        font-size: 14px;
      }
    }
    .box-content {
      display: flex;
    }
  }
}
.content-left {
  height: inherit;
  flex: 1;
}
.loading {
  height: inherit;
  > div {
    height: inherit;
    background-color: #10121a;
  }
  .ant-spin-text {
    font-size: 12px;
    color: #f0f0f0;
  }
}
</style>
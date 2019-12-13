<template>
  <div class="module-right-headerbox">
    <a-tabs @tabClick="tabClick" :activeKey="activeKey" type="editable-card" :hideAdd="true">
      <a-tab-pane v-for="item in items" :key="item.id + '&' + item.type">
        <span slot="tab" class="box-cell-tab">
          <bl-icon v-if="item.type == 3" type="bl-file-py" />
          <bl-icon v-if="item.type == 4" type="bl-file-sh" />
          <span class="tab-title">{{item.title}}</span>
        </span>
        <div>
          <div class="box-cell-content">
            <span>
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
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  props: {
    activeKey: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default() {
        return [{ id: "1", type: "3", title: "测试脚本1" }];
      }
    },
    tabClick: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.module-right-headerbox {
  .box-cell-tab {
    padding: 0 10px;
    .tab-title {
      font-size: 12px;
    }
  }
  .box-cell-content {
    color: white;
    font-size: 16px;
    > span {
      padding: 0px 15px;
      > i:hover {
        cursor: pointer;
        color: white;
      }
    }
  }
  .ant-tabs {
    background-color: #1e202d;
    .ant-tabs-content,
    .ant-tabs-tab-active {
      background-color: #3a3d51 !important;
    }
    .ant-tabs-bar {
      border-bottom: 3px solid #3a3d51;
      margin-bottom: 0px;
      .ant-tabs-nav-container {
        height: 37px;
        .ant-tabs-tab {
          margin: 0;
          border: none !important;
          border-radius: 0% !important;
          color: #dee1f0;
          background-color: #1e202d;
          line-height: 35px;
          padding: 0 10px;
          width: 300px; 
          &::before {
            content: "";
            width: 1px;
            height: 18px;
            position: absolute;
            top: 9px;
            right: 0;
            background: #3a3d51;
          }
          > div {
            line-height: 35px;
            .box-cell-tab {
              flex: 1;
            }
            .ant-tabs-close-x {
              color: #fff;
              &:hover {
                color: #f0f0f0;
              }
            }
          }
        }
        .ant-tabs-tab-active {
          margin-left: -1px;
          &::before {
            content: none;
          }
          .ant-tabs-close-x {
            color: #f0f0f0;
          }
        }
      }
    }
    .ant-tabs-content {
      padding: 6px 25px;
    }
  }
}
</style>
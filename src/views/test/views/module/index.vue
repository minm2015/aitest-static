<template>
  <div class="module-container">
    <v-contextmenu ref="contextmenu" class="bl-right-menu">
      <template v-if="treeActiveModel.type == 0">
        <!-- 根目录 -->
        <v-contextmenu-item
          @click="rightMenuClick(item.type)"
          v-for="item in rightItems.root"
          :key="item.type"
        >{{ item.name }}</v-contextmenu-item>
      </template>
      <template v-else-if="treeActiveModel.type == 1">
        <!-- 组件右键菜单 -->
        <v-contextmenu-item
          @click="rightMenuClick(item.type)"
          v-for="item in rightItems.component"
          :key="item.type"
        >{{ item.name }}</v-contextmenu-item>
      </template>
      <template v-else-if="treeActiveModel.type == 2">
        <!-- 文件夹右键菜单 -->
        <v-contextmenu-item
          @click="rightMenuClick(item.type)"
          v-for="item in rightItems.folder"
          :key="item.type"
        >{{ item.name }}</v-contextmenu-item>
      </template>
      <template v-else>
        <!-- 节点右键菜单 -->
        <v-contextmenu-item
          @click="rightMenuClick(item.type)"
          v-for="item in rightItems.script"
          :key="item.type"
        >{{ item.name }}</v-contextmenu-item>
      </template>
    </v-contextmenu>
    <create-component
      v-if="dialogModel.type == 8"
      :visible="dialogModel.visible"
      :model="dialogModel.model"
      @reset="reset"
    />
    <create-script
      v-if="dialogModel.type == 0"
      :visible="dialogModel.visible"
      :model="dialogModel.model"
      @reset="reset"
    />
    <div>
      <bl-leftbox title="组件开发" placeholder="组件/脚本/配置名称">
        <template slot="top-last-btm">
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>新建组件</span>
            </template>
            <a-icon type="file-add" @click="rightMenuClick(8)" />
          </a-tooltip>
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>导入</span>
            </template>
            <bl-icon type="bl-daoru" />
          </a-tooltip>
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>刷新</span>
            </template>
            <a-icon type="reload" />
          </a-tooltip>
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>迁移</span>
            </template>
            <bl-icon type="bl-copy" />
          </a-tooltip>
        </template>
        <template slot="body-block">
          <module-tree
            style="width: 240px"
            :treeData="treeData"
            :rightClick="rightClick"
            :select="select"
            :expand="onExpand"
            :expandedKeys="expandedKeys"
          />
        </template>
      </bl-leftbox>
    </div>
    <div class="module-container-right">
      <div
        v-if="items.length == 0"
        style="height:100%;display:flex;justify-content:center;align-items:center; background: #1e202d"
      >
        <div style="color:#e0e0e0; font-size: 12px;">
          <p>保存 - Ctrl+S | Cmd+S</p>
          <p>查询 - Ctrl+F | Cmd+F</p>
          <p>替换 - Ctrl+H | Cmd+Alt+F</p>
          <p>删除一行 - Ctrl+Shift+K | Cmd+Shift+K</p>
          <p>备注：编辑器只能同时打开五个，超过数量将会自动关闭第一个</p>
        </div>
      </div>
      <RightBox
        v-else
        :items="items"
        :activeKey="activeId"
        @tabClick="tabClick"
        @closeClick="closeClick"
      ></RightBox>
    </div>
  </div>
</template>

<script>
import {
  ModuleTree,
  CreateComponent,
  CreateScript,
  RightBox
} from "./components";
export default {
  created() {
    this.initialTreeData();
  },
  components: {
    ModuleTree,
    CreateComponent,
    CreateScript,
    // eslint-disable-next-line vue/no-unused-components
    RightBox
  },
  data() {
    return {
      //树节点右键操作关联model
      treeActiveModel: {
        type: 0,
        activeId: undefined
      },
      rightItems: this.COMMON_ENUM.ModuleRightItemEnum,
      moduleNodeType: this.COMMON_ENUM.ModuleNodeType,
      treeData: [],
      dialogModel: {
        type: 999,
        visible: false,
        data: {}
      },
      drawerStyle: {
        padding: 50
      },
      items: [], //编辑器顶部打开的元素列表, id/type/title/code
      activeId: "",
      expandedKeys: ["public-root"]
    };
  },
  methods: {
    initialTreeData() {
      this.treeData = [
        {
          title: "公共组件",
          id: "public-root",
          type: 0,
          class: "tree-root",
          children: [
            {
              title: "HttpRunner",
              class: "tree-switcher",
              id: "1",
              type: 1,
              slots: { icon: "httpRunner" },
              children: [
                {
                  title: "StrategyGroupApi",
                  id: "3",
                  type: 3,
                  code: "import logging",
                  slots: { icon: "python" }
                },
                {
                  title: "Shell",
                  id: "4",
                  type: 4,
                  code: "cat www.baidu.com",
                  slots: { icon: "shell" }
                },
                {
                  title: "文件夹",
                  class: "tree-switcher",
                  id: "5",
                  type: 2,
                  slots: { icon: "folder" },
                  children: [
                    {
                      title: "StrategyGroupApi",
                      id: "6",
                      type: 3,
                      slots: { icon: "python" }
                    },
                    {
                      title: "Shell",
                      id: "7",
                      type: 4,
                      slots: { icon: "shell" }
                    },
                    {
                      title: "文件夹",
                      class: "tree-switcher",
                      id: "8",
                      type: 2,
                      slots: { icon: "folder" },
                      children: [
                        {
                          title: "StrategyGroupApi",
                          id: "9",
                          type: 3,
                          slots: { icon: "python" }
                        },
                        {
                          title: "Shell",
                          id: "10",
                          type: 4,
                          slots: { icon: "shell" }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "文件夹",
              class: "tree-switcher",
              id: "2",
              type: 2,
              slots: { icon: "folder" },
              children: []
            }
          ]
        }
      ];
    },
    rightClick(e) {
      const postition = {
        top: e.event.clientY,
        left: e.event.clientX
      };
      this.treeActiveModel.type = e.node.dataRef.type;
      this.treeActiveModel.id = e.node.dataRef.id;
      this.$refs.contextmenu.show(postition);
    },
    rightMenuClick(type) {
      this.dialogModel.type = type;
      this.dialogModel.visible = true;
    },
    reset() {
      this.dialogModel.type = 999;
      this.dialogModel.visible = false;
    },
    select(selectedKeys, e) {
      const type = e.node.dataRef.type;
      const id = e.node.dataRef.id;
      const title = e.node.dataRef.title;
      if (
        type == this.moduleNodeType.Python.type ||
        type == this.moduleNodeType.Shell.type ||
        type == this.moduleNodeType.ENV.type
      ) {
        let filterResult = this.items.filter(item => {
          return item.id == id;
        });
        if (filterResult.length > 0) {
          // 说明节点在右边界面已经存在
          this.activeId = id;
          return;
        }
        if (this.items.length == 5) {
          //限制最多只能同时打开五个
          this.items.shift();
        }
        this.activeId = id;
        const item = {
          id: id,
          title: title,
          type: type,
          language:
            type == this.moduleNodeType.Python.type
              ? this.moduleNodeType.Python.language
              : type == this.moduleNodeType.Shell.type
              ? this.moduleNodeType.Shell.language
              : type == this.moduleNodeType.ENV.type
              ? this.moduleNodeType.ENV.language
              : "python",
          loading: true,
          code: ""
        };
        this.items.push(item);
        setTimeout(() => {
          item.code = this.selectNodeCode(id);
          item.loading = false;
        }, 1500);
      }
    },
    selectNodeCode(id) {
      return "hello word=" + id;
    },
    closeClick(item) {
      this.Arrays.arrayRemoveItem(this.items, item);
      if (item.id == this.activeId && this.items.length > 0) {
        //this.items.length > 0 防止关闭最后一个的时候这里报错
        this.activeId = this.items[this.items.length - 1].id;
      }
    },
    tabClick(item) {
      this.activeId = item.id;
    },
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      this.expandedKeys = expandedKeys;
    }
  }
};
</script>

<style lang="scss">
.module-container {
  height: 100%;
  width: 100%;
  display: flex;
  > div {
    height: inherit;
  }
  .module-container-right {
    width: inherit;
    height: inherit;
  }
}
</style>
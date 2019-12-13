<template>
  <div class="module-container">
    <v-contextmenu ref="contextmenu" class="bl-right-menu">
      <template v-if="treeActiveModel.type == 0">
        <!-- 根目录 -->
        <v-contextmenu-item
          @click="rightMenuClick(item)"
          v-for="item in rightItems.root"
          :key="item.type"
        >{{ item.name }}</v-contextmenu-item>
      </template>
      <template v-else-if="treeActiveModel.type == 1">
        <!-- 组件右键菜单 -->
        <v-contextmenu-item
          @click="rightMenuClick(item)"
          v-for="item in rightItems.component"
          :key="item.type"
        >{{ item.name }}</v-contextmenu-item>
      </template>
      <template v-else-if="treeActiveModel.type == 2">
        <!-- 文件夹右键菜单 -->
        <v-contextmenu-item
          @click="rightMenuClick(item)"
          v-for="item in rightItems.folder"
          :key="item.type"
        >{{ item.name }}</v-contextmenu-item>
      </template>
      <template v-else>
        <!-- 节点右键菜单 -->
        <v-contextmenu-item
          @click="rightMenuClick(item)"
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
            <a-icon type="file-add" />
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
            :onLoadData="onLoadData"
            :rightClick="rightClick"
            :select="select"
          />
        </template>
      </bl-leftbox>
    </div>
    <div class="module-container-right">
      <bl-rightbox v-if="items && items.length > 0">
        <template slot="rightbox-header">
          <right-headerbox
            :items="items"
            :activeKey="ideActiveModel.id + '&' + ideActiveModel.type"
            :tabClick="tabClick"
          />
        </template>
        <template slot="main-left">
          <bl-ide class="bl-ide-style-default" :current="ideActiveModel" />
        </template>
        <template slot="main-right">
          <RightSidebarbox />
        </template>
      </bl-rightbox>
      <div style="background: #1e202d; height: 100%"></div>
    </div>
  </div>
</template>

<script>
import {
  ModuleTree,
  CreateComponent,
  CreateScript,
  RightHeaderbox,
  RightSidebarbox
} from "./components";
export default {
  components: {
    ModuleTree,
    CreateComponent,
    CreateScript,
    RightHeaderbox,
    RightSidebarbox
  },
  data() {
    return {
      //树节点右键操作关联model
      treeActiveModel: {
        type: 0,
        activeId: undefined
      },
      ideActiveModel: {
        id: "",
        type: 999,
        language: "python",
        code: "//123131"
      },
      rightItems: this.COMMON_ENUM.ModuleRightItemEnum,
      moduleNodeType: this.COMMON_ENUM.ModuleNodeType,
      treeData: [
        {
          title: "公共组件",
          id: "root",
          type: 0,
          class: "tree-root"
        }
      ],
      dialogModel: {
        type: 999,
        visible: false,
        data: {}
      },
      drawerStyle: {
        padding: 50
      },
      items: [] //编辑器顶部打开的元素列表
    };
  },
  methods: {
    onLoadData(treeNode) {
      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          treeNode.dataRef.children = [
            {
              title: "HttpRunner",
              class: "tree-switcher",
              id: 1,
              type: 1,
              slots: { icon: "httpRunner" },
              children: [
                {
                  title: "StrategyGroupApi",
                  id: 3,
                  type: 3,
                  code: "import logging",
                  slots: { icon: "python" }
                },
                {
                  title: "Shell",
                  id: 4,
                  type: 4,
                  code: "cat www.baidu.com",
                  slots: { icon: "shell" }
                },
                {
                  title: "文件夹",
                  class: "tree-switcher",
                  id: 5,
                  type: 2,
                  slots: { icon: "folder" },
                  children: [
                    {
                      title: "StrategyGroupApi",
                      id: 6,
                      type: 3,
                      slots: { icon: "python" }
                    },
                    {
                      title: "Shell",
                      id: 7,
                      type: 4,
                      slots: { icon: "shell" }
                    },
                    {
                      title: "文件夹",
                      class: "tree-switcher",
                      id: 8,
                      type: 2,
                      slots: { icon: "folder" },
                      children: [
                        {
                          title: "StrategyGroupApi",
                          id: 9,
                          type: 3,
                          slots: { icon: "python" }
                        },
                        {
                          title: "Shell",
                          id: 10,
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
              id: 2,
              type: 2,
              slots: { icon: "folder" },
              children: []
            }
          ];
          this.treeData = [...this.treeData];
          resolve();
        }, 500);
      });
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
    rightMenuClick(e) {
      this.dialogModel.type = e.type;
      this.dialogModel.visible = true;
    },
    reset() {
      this.dialogModel.type = 999;
      this.dialogModel.visible = false;
    },
    tabClick(e) {
      const array = e.split("&");
      const id = array[0];
      const type = array[1];
      this.ideActiveModel.id = id;
      this.ideActiveModel.type = type;
      if (type == this.moduleNodeType.Python.type) {
        this.ideActiveModel.language = this.moduleNodeType.Python.language;
      } else if (type == this.moduleNodeType.Shell.type) {
        this.ideActiveModel.language = this.moduleNodeType.Shell.language;
      } else if (type == this.moduleNodeType.ENV.type) {
        this.ideActiveModel.language = this.moduleNodeType.ENV.language;
      }
    },
    select(selectedKeys, e) {
      const type = e.node.dataRef.type;
      const id = e.node.dataRef.id;
      if (
        type == this.moduleNodeType.Python.type ||
        type == this.moduleNodeType.Shell.type ||
        type == this.moduleNodeType.ENV.type
      ) {
        // 1、设置活动的组件
        this.ideActiveModel.id = id;
        this.ideActiveModel.type = type;
        if (type == this.moduleNodeType.Python.type) {
          this.ideActiveModel.language = this.moduleNodeType.Python.language;
        } else if (type == this.moduleNodeType.Shell.type) {
          this.ideActiveModel.language = this.moduleNodeType.Shell.language;
        } else if (type == this.moduleNodeType.ENV.type) {
          this.ideActiveModel.language = this.moduleNodeType.ENV.language;
        }
        let exist = false;
        this.items.forEach(item => {
          if (item.id == id) {
            exist = true;
            return;
          }
        });
        if (!exist) {
          console.log("not exist");
          if (this.items.length == 5) {
            this.items.shift();
          }
          this.items.push({
            id: id,
            type: type,
            title: e.node.dataRef.title
          });
        }
      }
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
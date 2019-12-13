export default {
  ModuleRightItemEnum: { // 组件界面右键菜单
    root: [
      { type: 8, name: "新建组件" },
      { type: 9, name: "导入组件" },
      { type: 0, name: "新建脚本" },
      { type: 1, name: "新建配置" },
      { type: 2, name: "新建文件夹" }
    ],
    component: [
      { type: 0, name: "新建脚本" },
      { type: 1, name: "新建配置" },
      { type: 2, name: "新建文件夹" },
      { type: 3, name: "重命名" },
      { type: 7, name: "删除" }
    ],
    folder: [
      { type: 0, name: "新建脚本" },
      { type: 1, name: "新建配置" },
      { type: 3, name: "重命名" },
      { type: 7, name: "删除" }
    ],
    script: [
      { type: 3, name: "重命名" },
      { type: 7, name: "删除" }
    ]
  },
  ModuleNodeType: {
    Root: { type: 0, name: 'Root', dec: "根目录" },
    HttpRunner: { type: 1, name: 'HttpRunner', dec: "HttpRunner" },
    Folder: { type: 2, name: 'Folder', dec: "文件夹" },
    Python: { type: 3, name: 'Python', language: "python", dec: 'Python' },
    Shell: { type: 4, name: 'Shell', language: "shell", dec: "Shell" },
    ENV: { type: 5, name: 'ENV', dec: "ENV" }
  }
  //[
  //   { type: 0, name: 'Root', dec: "根目录" },
  //   { type: 1, name: 'HttpRunner', dec: "HttpRunner" },
  //   { type: 2, name: 'Folder', dec: "文件夹" },
  //   { type: 3, name: 'Python', dec: 'Python' },
  //   { type: 4, name: 'Shell', dec: "Shell" },
  //   { type: 5, name: 'ENV', dec: "ENV" },
  // ]
}
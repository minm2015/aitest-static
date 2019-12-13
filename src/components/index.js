import Icon from './icon/index'
import Sidebar from './sidebar/index'
import Leftbox from './leftbox/index'
import Ide from './ide/index'
import Rightbox from './rightbox/index'

export default {
  install: function (Vue) {
    Vue.component('BlIcon', Icon)
    Vue.component('BlSidebar', Sidebar)
    Vue.component('BlLeftbox', Leftbox)
    Vue.component('BlIde', Ide)
    Vue.component('BlRightbox', Rightbox)
  }
}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//rem
import './modules/rem'

//filters :premiere
import './modules/filter'

import "./font/css/font-awesome.min.css"
//animate.css
import 'animate.css'

//引入全局scss文件
//在webpack中有一个特性，一切皆模块，在这里，webpack检测到scss文件之后会编译之后再将其拿出去的
import './stylesheets/main.scss'






import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


//处理axios，让组件通过this.$http来使用
import axios from 'axios'
import vueResource from "vue-resource"
Vue.prototype.$axios = axios
Vue.use(vueResource);
import router from './router'
import store from "./store"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  //相当于将el直接替换成app组件
  router,
  store,
  template: '<App/>'
})




//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG
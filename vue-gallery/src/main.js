import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import Slider from "./App.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./styles/global.css"


Vue.use(BootstrapVue)

new Vue({
    el: '#app_gallery',
    render: h => h(Slider)
})
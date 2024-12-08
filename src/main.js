import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//  Vue 애플리케이션의 진입점
//Django서버 주소를 baseURL로 지정 
axios.defaults.baseURL = 'http://127.0.0.1:8000'


// createApp(App): Vue 애플리케이션 인스턴스 생성
// .use(store): Vuex 스토어 플러그인 등록
// .use(router, axios): Vue Router와 axios 플러그인 등록
// .mount('#app'): 애플리케이션을 index.html의 #app 요소에 마운트
createApp(App).use(store).use(router, axios).mount('#app')

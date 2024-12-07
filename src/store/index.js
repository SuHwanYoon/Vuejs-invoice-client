import { createStore } from 'vuex'


//애플리케이션 전역의 상태관리
export default createStore({
  // 상태관리
  state: {
    //상태 프로퍼티 정의
    user: {
      username: ''
    },
    isAuthenticated: false,
    token : ''
  },
  // 계산된 상태값
  getters: {
  },
  // 상태변경함수
  // 동기적 작업만 수행
  mutations: {
    // 상태 초기화 property
    initializeStore(state){
      // 웹브라우저에서 데이터를 저장하는 localStorage
      // 사용자설정, 임시데이터 저장등 간단한 데이터 저장에 적합
      //localStorage에 token이 있다면
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        // 인증상태를 true로
        state.isAuthenticated = true
      } else {
        // 없다면 token은 비어있고 인증상태는 false
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state){
      state.token = ''
      state.isAuthenticated = false
    }
  },
  // 비동기 작업처리
  // API호출이나 복잡한 로직을 처리
  actions: { 
  },
  // 저장소 모듈화
  modules: {
  }
})

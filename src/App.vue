<!-- 템플릿 섹션: 애플리케이션의 기본 레이아웃 구조 -->
<template>
<!-- 전체를 감싸는 div -->
  <div id="wrapper">
    <!-- 네비게이션 바: Bulma CSS 프레임워크의 navbar 컴포넌트 사용 -->
    <nav class="navbar is-dark">
      <!-- 로고/브랜드 영역 -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong>YOON's-Invoice-App</strong>
        </router-link>
      </div>

      <!-- 네비게이션 메뉴 영역 -->
      <div class="navbar-menu">
        <div class="navbar-end">
          <!-- 로그인 상태일 때 보이는 메뉴 -->
          <!-- store.state.isAuthenticated가 true이면 Dashboard가 표시됨 -->
          <template v-if="$store.state.isAuthenticated">
            <router-link to="/dashboard" class="navbar-item">
              Dashboard
            </router-link>
          </template>

          <!-- 비로그인 상태일 때 보이는 메뉴 -->
          <template v-else>
            <router-link to="/" class="navbar-item">Home</router-link>
            <!-- 회원가입/로그인 버튼 -->
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/sign-up" class="button is-success">
                  <!-- <strong>Sign up</strong> -->
                  <strong>会員登録</strong>
                </router-link>
                <router-link to="/log-in" class="button is-light">
                  <!-- <strong>Log in</strong> -->
                  <strong>ログイン</strong>
                </router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>

    <!-- 메인 콘텐츠 영역: 라우터 뷰가 렌더링되는 곳 -->
    <section class="section">
      <router-view />
    </section>

    <!-- 푸터 영역 -->
    <footer class="footer">
      <p class="has-text-centered">Copyright YOON 2024</p>
    </footer>
  </div>
</template>

<!-- 스크립트 섹션: 컴포넌트 로직 -->
<script>
import axios from "axios";

export default {
  name: "App",
  // 컴포넌트 생성 전에 실행되는 훅
  beforeCreate() {
    // Vuex 스토어 초기화
    this.$store.commit("initializeStore");

    // 토큰이 있으면 axios 헤더에 인증 토큰 추가
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token" + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>

<!-- 스타일 섹션: Bulma CSS 프레임워크 임포트 -->
<style lang="scss">
@import "../node_modules/bulma";
</style>
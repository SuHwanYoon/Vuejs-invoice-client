<template>
    <!-- 회원가입 페이지의 메인 컨테이너 -->
    <div class="page-signup">
        <!-- Bulma의 columns 클래스를 사용한 레이아웃 구성 -->
        <div class="columns">
            <!-- 중앙 정렬을 위한 column 설정 (4칸 너비, 4칸 오프셋) -->
            <div class="column is-4 is-offset-4">
                <!-- 페이지 제목 -->
                <h1 class="title">会員登録</h1>

                <!-- 회원가입 폼: submit 이벤트 발생 시 submitForm 메소드 실행, prevent로 기본 동작 방지 -->
                <form @submit.prevent="submitForm">
                    <!-- 이메일 입력 필드 -->
                    <div class="field">
                        <label>E-mail</label>
                        <div class="control">
                            <!-- v-model로 username 데이터와 양방향 바인딩 -->
                            <input type="email" name="username" class="input" v-model="username">
                        </div>
                    </div>

                    <!-- 비밀번호 입력 필드 -->
                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <!-- v-model로 password 데이터와 양방향 바인딩 -->
                            <input type="password" name="password" class="input" v-model="password">
                        </div>
                    </div>

                    <!-- 에러 메시지 표시 영역: errors 배열에 내용이 있을 때만 표시 -->
                    <div class="notification is-danger" v-if="errors.length">
                        <!-- errors 배열의 각 항목을 순회하며 표시 -->
                        <p v-for="error in errors" v-bind:key="error">
                            {{error}}
                        </p>
                    </div>

                    <!-- 제출 버튼 -->
                    <div class="field">
                        <div class="control">
                            <button class="button is-success">会員登録</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    // 컴포넌트의 데이터 정의
    data () {
        return {
            username: '',    // 이메일 입력값 저장
            password: '',    // 비밀번호 입력값 저장
            errors: []       // 에러 메시지 저장 배열
        }
    },
    methods: {
        // 폼 제출 처리 메소드
        submitForm(e){
            // 폼 데이터 객체 생성
            const formData = {
                username: this.username,
                password: this.password
            }

            // API 엔드포인트로 POST 요청 전송
            // djoser를 이용한 사용자 생성요청
            axios.post('/api/v1/users/', formData)
            .then(
                // 성공 시 로그인 페이지로 리다이렉트
                response => {
                    console.log(response)
                    this.$router.push('/log-in')
                }
            )
            .catch(
                // 에러 처리
                error => {
                    if (error.response) {
                        // 서버 응답의 에러 데이터를 순회하며 에러 메시지 추가
                        for (const property in error.response.data) {
                            this.error.push(`${property}: ${error.response.data[property]}`)
                        }
                        console.log(JSON.stringify(error.response.data))
                    }else if (error.message){
                        // 일반 에러 메시지 처리
                        console.log(JSON.stringify(error.message))
                    }else {
                        // 기타 에러 처리
                        console.log(JSON.stringify(error))
                    }
                }
            )
        }
    }
}
</script>

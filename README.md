# vue.js
# 🎯 Vue 3 5일 완성 커리큘럼 (Composition API + Pinia 중심)

## 📘 개요

- 총 시간: **5일 × 7시간 = 35시간**
- 목표: Vue 3 실무 핵심 기능을 예제 중심으로 학습
- 핵심 주제:
  - Composition API 완전 이해
  - Pinia 상태관리 실습
  - Vue Router + Axios 통합
  - 로그인 + 게시판 프로젝트 완성

---

## 🗓 전체 일정 개요

| 일차 | 주제 | 주요 내용 | 실습 포인트 |
|------|------|-----------|--------------|
| **Day 1** | Vue 기본기 & Composition API 기초 | Vue 개념, 프로젝트 생성, 반응성 이해, 템플릿 문법 | Counter, Todo 예제 |
| **Day 2** | Composition API 심화 & 컴포넌트 통신 | ref/reactive, computed, watch, props/emit, lifecycle | 부모-자식 통신 TodoApp |
| **Day 3** | Router & 비동기 통신 | Vue Router, axios 연동, API CRUD | 게시판/상품 목록 |
| **Day 4** | Pinia 상태관리 & 모듈화 | Pinia 스토어 설계, actions/getters, persistence | 로그인 + 상태공유 예제 |
| **Day 5** | 실전 프로젝트 | 로그인 + 게시판 통합, 라우터 보호, 최종 빌드 | 팀별 미니 프로젝트 완성 |

---

## 🧩 Day 1 – Vue 기본 구조와 Composition API 입문

### 🎯 학습 목표
- Vue 프로젝트 구조 이해  
- Composition API 기본 문법 숙달  

### 📖 주요 내용
1. Vue CLI / Vite 환경 설정  
2. Vue 3 프로젝트 구조 (`App.vue`, `main.js`)
3. Template / Script / Style 영역 이해  
4. Composition API 기초
   - `setup()` 함수
   - `ref()`, `reactive()`, `toRefs()`
5. 양방향 바인딩 (`v-model`)
6. 이벤트 처리 (`@click`, `@input`)
7. 조건/반복 렌더링 (`v-if`, `v-for`)
8. computed / watch 기초

### 💻 실습 예제
- CounterApp (`ref` / `reactive` 차이 실습)
- 간단한 TodoApp (입력 → 리스트 렌더링 → 삭제)

---

## 🧠 Day 2 – Composition API 심화 & 컴포넌트 통신

### 🎯 학습 목표
- 컴포넌트 구조화, Props/Emit 사용, Lifecycle 제어  

### 📖 주요 내용
1. `props`, `emit`, `v-bind`, `v-on`  
2. 자식 → 부모 이벤트 전달  
3. 컴포넌트 구조화 (`/components` 폴더)  
4. `computed`, `watch` 심화 활용  
5. Lifecycle Hooks (`onMounted`, `onUpdated`, `onUnmounted`)  
6. `provide`, `inject`로 데이터 전달  
7. 재사용 가능한 Composition 함수 (`useCounter`, `useFetch`)  

### 💻 실습 예제
- TodoApp 확장 (부모-자식 구조로 분리)
- Composition Hook으로 카운터 기능 분리

---

## 🌐 Day 3 – Vue Router + API 연동

### 🎯 학습 목표
- SPA 구조 이해 및 API CRUD 구현  

### 📖 주요 내용
1. Vue Router 설치 및 설정 (`routes.js`)
2. `router-link`, `router-view` 사용법  
3. 동적 라우트, Named Route  
4. Axios로 API 통신  
5. RESTful CRUD 예제  
6. async/await와 에러 핸들링  
7. Loading/Empty/Error 상태 관리  

### 💻 실습 예제
- 게시판 목록 / 상세 / 등록 페이지  
- JSONPlaceholder API 연동 (GET/POST/PUT/DELETE)
- Router + Axios 통합 CRUD 구현

---

## 🧭 Day 4 – Pinia 상태관리 & 전역 데이터 관리

### 🎯 학습 목표
- Pinia를 이용한 전역 상태관리 이해 및 적용  

### 📖 주요 내용
1. Pinia 개념 및 Vuex와의 비교  
2. Pinia 설치 및 설정 (`createPinia()`)  
3. `defineStore` 구조 (`state`, `getters`, `actions`)  
4. Composition API에서 Pinia 사용 (`useStore()`)  
5. Store 모듈화 & persist plugin  
6. 전역 로그인/사용자 정보 관리  
7. API + Pinia 결합  

### 💻 실습 예제
- 로그인 상태 저장  
- 게시판 데이터 Store화  
- Pinia + Router 연동 (인증 라우팅)

---

## 🚀 Day 5 – 통합 프로젝트: 로그인 + 게시판

### 🎯 학습 목표
- Vue 전체 흐름을 통합한 실전 프로젝트 완성  

### 📖 주요 내용
1. 라우터 인증 가드 (`beforeEach`)  
2. 로그인 후 토큰 기반 API 요청  
3. Pinia로 사용자 상태 관리  
4. CRUD 게시판 통합  
5. Layout 컴포넌트 (Header, Sidebar)  
6. Vue 빌드 및 배포 (Vite → dist)  
7. 성능 최적화 & 수업 마무리  

### 💻 실습 예제
- “로그인 + 게시판” 통합 프로젝트  
  - 로그인 화면  
  - 게시판 목록 / 등록 / 수정 / 삭제  
  - 로그아웃 / 권한제어  
- 프로젝트 발표 및 Q&A  

---

## 📁 실습 코드 패키지 구조


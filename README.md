# Swap_FE

# 소개

이 프로젝트는 JavaScript의 라이브러리인 React와 모듈러인 Vite를 기반으로 한 웹
애플리케이션입니다. 아래는 Node.js 버전 및 사용된 주요 라이브러리와 그
설명입니다.

## 배포 사이트

### Frontend

http://swapfront-bucket.s3-website.ap-northeast-2.amazonaws.com/

### Backend

AWS에서 EC2를 이용해 배포

## Node.js 버전: v18.17.1 이상

- 그룹: team_pwp
- 이름: swa

## 실행방법

### 1. pnpm 패키지매니저 설치

```bash
sudo npm install -g pnpm
```

### 2. package.json에 존재하는 라이브러리를 설치합니다.

```bash
sudo pnpm install
```

### 3. 프로젝트를 시작합니다.

```bash
sudo pnpm run dev
```

### npm 버전

- 9.6.7 이상

## 패키지매니져 : Pnpm

### 버전

- v9.0.6 이상

### 설명

- pnpm은 빠르고 효율적인 패키지 매니저로, Node.js 애플리케이션의 의존성을
  설치하고 관리하는 데 사용됩니다.
- 대규모 프로젝트와 모노레포 환경에서 특히 유용하며, 빠르고 효율적인 패키지
  관리를 제공하여 개발자 생산성을 향상시킵니다.

## 사용된 라이브러리

### React

- 의존성: react, react-dom
- 설명: 사용자 인터페이스를 구축하기 위한 라이브러리입니다.

### Vite

- 의존성: vite
- 설명: 빠른 빌드 도구로, 개발 서버와 빌드 프로세스를 제공합니다.

### TypeScript

- 의존성: typescript
- 설명: 정적 타입 검사를 지원하는 JavaScript의 상위 집합입니다.

### Emotion

- 의존성: @emotion/react, @emotion/styled, styled-components
- 설명: CSS-in-JS 라이브러리로, 스타일을 JavaScript 파일 내에서 정의할 수
  있습니다.

### antd

- 의존성: antd, @ant-design/icons
- 설명: CSS-in-JS 라이브러리로, 다양한 UI Components 를 사용할 수 있습니다.

### Axios

- 의존성: axios
- 설명: HTTP 클라이언트로, API 요청을 쉽게 할 수 있도록 도와줍니다.

### React Router DOM

- 의존성: react-router-dom
- 설명: React 애플리케이션에서 라우팅을 관리하기 위한 라이브러리입니다.

### Zustand

- 의존성: zustand
- 설명: React 상태 관리를 위한 작은 라이브러리입니다.

### Date-fns

- 의존성: date-fns
- 설명: 날짜 처리를 위한 라이브러리입니다.

### WebSocket 관련 라이브러리

- 의존성: @stomp/stompjs, sockjs-client, websocket
- 설명: WebSocket 통신을 지원하며, 실시간 양방향 통신을 구현할 수 있게 해줍니다.

### React Modal

- 의존성: react-modal
- 설명: 접근성이 높은 모달 컴포넌트를 제공하는 라이브러리입니다.

### React JS Pagination

- 의존성: react-js-pagination
- 설명: 페이징 컴포넌트를 제공하는 라이브러리입니다.

### ESLint 및 관련 플러그인

- 의존성: eslint, eslint-config-prettier, eslint-plugin-prettier,
  eslint-import-resolver-typescript, eslint-plugin-import,
  eslint-plugin-jsx-a11y, eslint-plugin-n, eslint-plugin-react,
  eslint-plugin-react-hooks, eslint-plugin-react-refresh
- 설명: 코드 품질을 보장하기 위해 사용하는 정적 분석 도구입니다.

### Prettier

- 의존성: prettier, @trivago/prettier-plugin-sort-imports
- 설명: 코드 포매터로, 일관된 코드 스타일을 유지해줍니다.

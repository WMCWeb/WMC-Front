# WMC-Front

### 1. node 설치
npm 및 node의 각종 모듈, 패키지를 이용하기 위해서 `node` 를 설치해야 합니다.   
`node version : v13.13.0` 

### 2. npm 의존성 모듈 설치
`npm i` 를 입력해 프로젝트에 필요한 의존성을 다운로드합니다.

### 3. `.env` 파일 생성
환경변수를 이용하기 위해서 저희 프로젝트는 `.env` 파일을 사용합니다.   
`copy .env.example .env` (Window)   
`cp .env.example .env` (Mac 또는 Linux)   
현재 사용하는 변수는 `PORT` 입니다. 로컬 호스트에서 사용할 포트 번호를 입력해 주세요.
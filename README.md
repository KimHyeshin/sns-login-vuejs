# SNS Login with Vue js
node, passport, vue, vuex, vue-router  
Vuejs를 이용하여 SNS Login을 구현합니다. 처음에는 client와 server를 별도로 구현하여 client는 Vuejs로 server는 Nodejs로 구현할 것입니다. 별도 구현이 완료되면 Vue ServerSide rendering 학습 후 통합할 예정입니다.
DB도 처음에는 lowdb를 사용하여 가볍게 시작하며, 추후 Firebase나 MongoDB로 개선할 예정입니다. 

- [Client 소개](#client)
- [Server 소개](#server)
- [Developers - App setting](#developers---app-setting)
- [Update history](#update-history)

<br>

## Client
### Project setup
```
$ cd client
$ npm install
```

#### Compiles and hot-reloads for development
```
$ npm run serve:dev
$ npm run serve:prod
```

#### Compiles and minifies for production
```
$ npm run build:dev
$ npm run build:prod
```

<br>

## Server
### Project setup
```
$ cd server
$ npm install
```

#### Compiles and hot-reloads for development
```
npm run dev
```

<br>

## Developers - App setting
각 플랫폼 개발자 센터에서 앱 생성 후 설정을 완료한다. 필요한 ClientID 및 Key 값을 가져온다.    

개발자 센터에서 SNS 로그인을 위한 설정
- [NAVER 로그인 설정](./docs/setting-naver.md)
- [Kakao 로그인 설정](./docs/setting-kakao.md)
- Facebook
- Google

<br>

## Update history
### branches
#### feature-1  : Vue 스캐폴딩
- [2019.09.24] client에 vue 스캐폴딩 규격 추가
    - gitignore 업데이트
    - [Vue 스캐폴딩](https://github.com/KimHyeshin/vue-code-scaffolding)
    
- [2019.09.24] TopNav 추가
- [2019.09.24] auth navigation guard 추가
    - Vuex store에 authenticated 추가

<br>          
        
#### feature-2  : Naver login 테스트 
- 참고 : https://developers.naver.com/docs/login/api/

- [2019.09.25] server에 naver login 샘플 코드 추가
    - .env 추가 (어플리케이션 키, ID 등을 관리)
    - /naverlogin route 추가
    - /naverlogin callback 추가
    
- [2019.09.25] client에 loginUrl 추가
    - .env에 login관련 환경변수 추가

<br>  
   
#### feature-3  : passport-naver로 네이버 로그인 기능 구현       
- [2019.09.25] server에 passport 추가
    - passport-naver 추가 
    - [lowdb](https://github.com/typicode/lowdb) 추가
    - 연동 코드 작성
    
- [2019.09.26] auth 로직 수정
    - router 네비게이션 가드에 returnPath param 추가
    - Vuex mutations, actions에 인증 관련 함수 추가 
    - server에 login/logout 로직 추가
    - 로그인 시 가입자정보가 있으면 해당 정보를 리턴하고 가입자 정보가 없는 경우 저장하도록 변경

- [2019.09.28] passport deserializeUser에 로직 추가
    - 인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어와서 바로 데이터 넘기도록 수정
         
#### feature-4 : passport-facebook으로 페이스북 로그인 기능 구현
- [2019.09.28] passport-facebook 추가
    - FacebookStrategy 설정 추가
    - JavaScript용 Facebook SDK 추가
    - Facebook 로그인 버튼 추가 (https://developers.facebook.com/docs/facebook-login/web?locale=ko_KR#loginbutton)    
- [2019.09.29] Facebook SDK를 사용하지 않고 로그인 대화 상자 호출 및 리디렉션 URL 설정하는 방식으로 변경
    - Facebook 로그인 버튼을 asset에 추가
- [이슈] 페이스북 로그인을 사용하려면 https 적용해야함. ERR_SSL_PROTOCOL_ERROR    
            
#### feature-5 : passport-kakao로 카카오 로그인 기능 구현
- [2019.09.29] .env, .env.local 추가하여 키 관리
- [2019.09.29] passport-kakao 추가
    - KakaoStrategy 설정 추가
    - Kakao 로그인 버튼 추가

#### feature-6 : passport-google-oauth20 으로 구글 로그인 기능 구현
- [2019.09.30] passport-google-oauth20 추가
    - GoogleStrategy 설정 추가
    - Google 로그인 버튼 추가
- [이슈] UserInfoError: Invalid Credentials Error   


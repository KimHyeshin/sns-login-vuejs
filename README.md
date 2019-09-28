# sns-login-vuejs
node, passport, vue, vuex, vue-router

## client
### Project setup
```
$ cd client
$ npm install
```

#### Compiles and hot-reloads for development
```
$ npm run serve
```

#### Compiles and minifies for production
```
$ npm run build
```

<br>

## server
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

## Update history
### branches
#### master  
- [~2019.07.03] initial commit.  
- [2019.07.08] branch 분기 
     

#### develop   


    
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
    - 이슈 ) 페이스북 로그인을 사용하려면 https 적용해야함. 버튼 주석처리
            
#### feature-5 : passport-kakao로 카카오 로그인 기능 구현
- [2019.09.29] .env, .env.local 추가하여 키 관리



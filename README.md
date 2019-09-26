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
- master  
    - [~2019.07.03] initial commit.  
    - [2019.07.08] branch 분기 
    
- develop  
    
- feature-1  
    - [2019.09.24] client에 vue 스캐폴딩 규격 추가
        - gitignore 업데이트
        - [vue 스캐폴딩](https://github.com/KimHyeshin/vue-code-scaffolding)
    - [2019.09.24] TopNav 추가
    - [2019.09.24] auth navigation guard 추가
        - Vuex store에 authenticated 추가
        
- feature-2  
    - [2019.09.25] server에 naver login 샘플 코드 추가
        - .env 추가 (어플리케이션 키, ID 등을 관리)
        - /naverlogin route 추가
        - /naverlogin callback 추가
    - [2019.09.25] client에 loginUrl 추가
        - .env에 login관련 환경변수 추가
   
- feature-3        
    - [2019.09.25] server에 passport 추가
        - passport-naver 추가 
        - lowdb 추가
        - 연동 코드 작성
    - [2019.09.26] auth 로직 수정
        - router 네비게이션 가드에 returnPath param 추가
        - Vuex mutations, actions에 인증 관련 함수 추가 
        


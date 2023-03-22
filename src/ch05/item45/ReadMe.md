## 아이템 45 devDependencies에 typescript와 @types 주가하기

- depencencies
  현재 프로그램을 실행하는 데 필수적인 라이브러리들이 포함됨
  해당 프로젝트를 npm에 공개하여 사용자가 해당 프로젝트를 설치한다면 그 프로젝트의 dependencies에 들어있는 라이브러리도 함께 설치될 것

- devDependencies
  현재 프로젝트를 개발하고 테스트하는데 사용되지만,  **런타임** 에는 필요 없는 라이브러리들이 포함됨!

- peerDependencies 
  런타임에는 필요하긴 하지만 의존성을 직접 관리하지 않는 라이브러리들이 포함됨
  플러그인 같은것들이 포함 
## Item 10: Avoid Object Wrapper Types (String, Number,Boolean, Symbol, BigInt)

## 아이템 10 객체 래퍼 타입 피하기

```typescript
'primitive'.charAt(3)
```

위 해당 코드의 'primitive'의 경우 charAt 메서드를 갖고 있지 않지만
자바스크립트가 미리 정의해둔 String객체가 이를 행해준다.

자바스크립트는 위같은 타입들을 변화하는데 있어서 자유롭다.
즉 내가 charAt이라는 메서드를 호출하게 되면 javaScript는 이 'primitive'를  String 객체로 감싸서 charAt 메서드를 호출하게 된다.
이후에 해당 객체를 버립니다.


```javascript
let x = "hello"
x.language = 'English' 
console.log(x.language)
```



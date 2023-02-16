## Item 8: Know How to Tell Whether a Symbol Is in the Type Space or Value Space

## 아이템 8타입 공간과 값 공간의 심벌 구분하기

타입스크립트에서 작성된 코드는 아래 2개의 공간중 한 곳에 존재합니다.

- 타입 공간(Type space)
- 깂 공간(Value space)

```typescript
//타입 공간
interface Cylinder {
  radius: number;
  height: number;
}

//값 공간
const Cylinder = (radius: number, height: number) => ({ radius, height });
```

<img width="734" alt="image" src="https://user-images.githubusercontent.com/70311004/219228095-7670b010-5c56-4e01-b70d-dc6b131dbea5.png">

```typescript
const p: Person = { first: "Jane", last: "Jacobs" };
// ---------------------------- Values
// ------- Type

type T1 = typeof p;
//type T1 = Person

const v1 = typeof p;
console.log(v1); // "object"
```

### 값 타입 헷갈리는 리스트
- this
  - 값: this는 자바스크립트의 this 키워드입니다(아이템 49). 
  - 타입: ‘다형성(polymorphic) this’라고 불리는 this의 타입스크립트 타입입니다. 

- &, |
  - 값: AND와 OR 비트연산
  - 타입:  intersection 과 union 연산자.

- const
  - 값: 새변수를선언
  - 타입: as const 리터럴또는리터럴표현식의추
론된 타입을 바꿉니다 (item 21)

-  extends
  서브클래스 (class A extends B) 또는 서브타입 (interface A extends B) 또는 제너릭 타입의 한정자(Generic<T extends number>)를 정의 할수있습니다.

- in은 루프 (for (key in object)) 또는 매핑된 (mapped) 타입에 등장합니다.


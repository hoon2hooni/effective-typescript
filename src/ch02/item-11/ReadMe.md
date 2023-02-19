# Item 11: Recognize the Limits of Excess Property Checking

## 아이템 11 잉여 속성 체크의 한계 인지하기

### “excess property checking" (잉여속성 체크)

```typescript
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

const roomLiteral: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
  //Type '{ numDoors: number; ceilingHeightFt: number; elephant: string; }' is not assignable to type 'Room'.
};
```

### structural type (구조적 타이핑)

```typescript
const rData = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
};

const roomStructural: Room = rData;
```

### 두개중 무엇을 사용해야할까?

잉여 속성 체크는 구조적 타이핑 시스템에서 허용되는 속성 이름의 오타 같 온 실수를 잡는 데 효과적인 방법입니다.


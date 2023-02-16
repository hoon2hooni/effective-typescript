## Item 7: Think of Types as Sets of Values

## 타입이 값들의 집합이라고 생각하기

타입을 집합으로 생각하자!

### 가장 작은 집합부터

- 공집합(never)

  ```typescript
  const x: never = 12;
  ```

- 단일 값 집합
  ```typescript
  type A = "A";
  type B = "B";
  type Twelve = 12;
  ```
-

| 타입스크립트 용어 | 집합용어 |
| --- | --- |
| never | ∅ (공집합) |
| Literal type | 원소가 1개인 집합 |
| 값이 T에 할당가능 | 값 ∈ T (값이 T의 원소) (member of)  |
| T1이 T2에 할당 가능 | Tl ⊆  T2 (Tl이 T2의 부분 집합) (subset of) |
| T1이 T2를 상속 | Tl ⊆  T2 (Tl이 T2의 부분 집합) (subset of) |
| T1 \| T2 | T1 ∪ T2 (union) |
| T1 & T2 | T1 ∩ T2 (intersection) |
| unknown | 전제 (universal) 집합 |
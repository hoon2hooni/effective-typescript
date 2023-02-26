## Item 18: Use Mapped Types to Keep Values in Sync

### 아이템 18 매핑된 타입을 사용하여 값을 동기화하기

```typescript
interface ScatterProps {
  // The data
  xs: number[];
  ys: number[];
  // Display
  xRange: [number, number];
  yRange: [number, number];
  color: string;
  // Events
  onClick: (x: number, y: number, index: number) => void;
}

const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};

interface ScatterProps {
  // ...
  onDoubleClick: () => void;
}

const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  // ~~~~~~~~~~~~~~~ Property 'onDoubleClick' is missing in type // ...
};
```

요약
• 매핑 된 타입을 사용해서 관련된 값과 타입을 동기화
• 선택을 강제하도록 하기 위해선 매핑된 타입을 고려하는 것 추천

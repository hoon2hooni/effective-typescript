## Item 24: Be Consistent in Your Use of Aliases

## 아이템 24 일관성 있는 별칭 사용하기



```typescript
polygon.bbox; // Type is BoundingBox | undefined
if (polygon.bbox) {
  polygon.bbox; // Type is BoundingBox 
  fn(polygon);
  polygon.bbox; // Type is still BoundingBox
}
```
타입스크립트는 함수가 타입 정제를 무효화하지 않는다고 가정합니다. 

그러나 **실제로는 무효화될 가능성이 있습니다.**
polygon.bbox로 사용하는 대신 bbox 지역 변수로 뽑아내서 사용하면 bbox의 타입은 정확히 유지되지만, 
polygon.bbox의 값과 같게 유지되지 않을수 있습니다.


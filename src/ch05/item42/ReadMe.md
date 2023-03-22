# 아이템 42 모르는 타입의 값에는 any 대신 unknown을 사용하기

any 타입은 어떠한 타입에 할당가능
어떠한 다입이든 any로 할당가능


unknown타입은 어떠한 타입으로 할당 가능하다.
어떠한 타입이든 unknown으로 할당 하기 어렵다.

{} 타입은 null과 undefined를 제외한 모든 값을 포함합니다.
object 타입은 모든 비기본형 (non-primitive) 타입으로 이루어집니다.

## 
null과 undefined가 불가능하다고 판단되는 경우만 unknown 대신 {}를 사용하면 된다.
{}, object, unknown의 차이점을 이해하자!!!

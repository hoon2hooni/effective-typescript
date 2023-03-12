# Item 28: Prefer Types That Always Represent Valid States
# 아이템 28 유효한 상태만 표현하는 타입을 지향하기

Types that represent both valid and invalid states are likely to lead to confusing and error-prone code.

Prefer types that only represent valid states. Even if they are longer or harder to express, 코드가 길어지거나 표현하기 어렵지만 결국 시간을 절약하고 고통을 줄일 수 있음.
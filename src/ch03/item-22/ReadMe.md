## Item 22: Understand Type Narrowing

## 아이템 22 타입 좁히기

### null체크

```typescript
const el = document.getElementById("foo");
//    const el: HTMLElement | null
if (!el) {
  throw new Error("there is no element");
}
el.innerHTML = "Party Time";
//const el: HTMLElement
```

### instanceof

```typescript
function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    search;
    //(parameter) search: RegExp
    return !!search.exec(text);
  }
  search;
  //   (parameter) search: string
  return text.includes(search);
}
```

### 내장함수 활용

```typescript
function containsArray(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  //     const termList: string[]
}
```

### typeof 활용

```typescript
const el = document.getElementById("foo");
if (typeof el === "object") {
  //null은 "object"로되기에..
  el.innerHTML;
  //const el: HTMLElement | null
}
```

### 명시적 태그

```typescript
interface UploadEvent {
  type: "upload";
  filename: string;
  contents: string;
}

interface DownloadEvent {
  type: "download";
  filename: string;
}

type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case "download":
      e;
    //parameter) e: DownloadEvent
    case "upload":
      e;
    //(parameter) e: AppEvent
  }
}
```

## 식별을 위한 커스텀함수!!(내가 잘 몰랐던 것)

- return이 boolean이여야 함, 반환타입에 a is 원하는 타입 해주어야함!

```typescript
function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    el;
    // el: HTMLInputElement
    return el.value;
  }
  el;
  //el: HTMLElement
  return el.textContent;
}

const membersWithFilter = ["Janet", "Michael"]
  //const membersWithFilter: (string | undefined)[]
  .map((who) => jackson5.find((n) => n === who))
  .filter((who) => who !== undefined); //

function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const membersWithIsDefined = ["Janet", "Michael"]
  //const membersWithIsDefined: string[]
  .map((who) => jackson5.find((n) => n === who))
  .filter(isDefined); //
```

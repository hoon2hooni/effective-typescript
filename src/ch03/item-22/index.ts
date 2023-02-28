{
  //null체크
  const el = document.getElementById("foo");
  //    ^?
  if (!el) {
    throw new Error("there is no element");
    //^?
  }
  el.innerHTML = "Party Time";

  //instanceof예시
  function contains(text: string, search: string | RegExp) {
    if (search instanceof RegExp) {
      search;
      //^?
      return !!search.exec(text);
    }
    search;
    //   ^?
    return text.includes(search);
  }
  //내장함수 화용
  function containsArray(text: string, terms: string | string[]) {
    const termList = Array.isArray(terms) ? terms : [terms];
    //     ^?
  }
  //typeof 활용
  {
    const el = document.getElementById("foo");
    if (typeof el === "object") {
      //null은 "object"로되기에..
      el.innerHTML;
      //^?
    }
  }

  function foo(x?: null | string | number) {
    if (!x) {
      x;
      //^?
    }
  }
  //명시적 태그
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
      //^?
      case "upload":
        e;
      //^?
    }
  }

  // 식별을 위한 커스텀 함수
  //사용자 정의 타입 가드
  function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return "value" in el;
  }

  function getElementContent(el: HTMLElement) {
    if (isInputElement(el)) {
      el;
      //^?
      return el.value;
    }
    el;
    //^?
    return el.textContent;
  }

  const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Michael"];
  const members = ["Janet", "Michael"] //
    .map((who) =>
      //    ^?
      jackson5.find((n) => n === who)
    );

  const membersWithFilter = ["Janet", "Michael"]
          //^?
    .map((who) => jackson5.find((n) => n === who))
    .filter((who) => who !== undefined); //

  function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined;
  }

  const membersWithIsDefined = ["Janet", "Michael"]
    //     ^?
    .map((who) =>
      //    ^?
      jackson5.find((n) => n === who)
    )
    .filter(isDefined); //
}

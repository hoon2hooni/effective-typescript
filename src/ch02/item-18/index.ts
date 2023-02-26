{
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

  function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
    //이렇게 해주면 scatterProps의 key추론 가능 (item 54참고)
    let k: keyof ScatterProps;
    for (k in oldProps) {
      if (oldProps[k] !== newProps[k]) {
        if (k !== "onClick") return true;
      }
    }
    return false;
  }

  function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
    return (
      oldProps.xs !== newProps.xs ||
      oldProps.ys !== newProps.ys ||
      oldProps.xRange !== newProps.xRange ||
      oldProps.yRange !== newProps.yRange ||
      oldProps.color !== newProps.color
      // (no check for onClick)
    );
  }

  const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
  };

  function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
      if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
        return true;
      }
    }
    return false;
  }

  interface ScatterProps {
    ///....
    onDoubleClick: () => void;
  }
  const REQUIRES_UPDATE_: { [k in keyof ScatterProps]: boolean } = {
    // ~~~~~~~~~~~~~~~ Property 'onDoubleClick' is missing in type // ...
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
  };

  const PROPS_REQUIRING_UPDATE: (keyof ScatterProps)[] = [
    "xs",
    "ys",
    // ...
  ];
  
  /**
   * 이런 방식은 오류를 정확히 잡아 냅니다. 속성을 삭제하거나 이름을 바꾸어도 비슷한 오류가 발생합니다.
   * 매핑된 타입은 한 객체가 또 다른 객체와 정확히 같은 속성을 가지게 할 때 이상적입니다. 
   * 이번 예제처럼 매핑된 타입을 사용해 타입스크립트가 코드에 제약을 강제하도록 할 수 있습니다.
   */
}

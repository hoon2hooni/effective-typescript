{
  interface Person {
    firstName: string;
    lastName: string;
  }

  interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
  }

  function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  interface Point2D {
    x: number;
    y: number;
  }

  function distance2(a: Point2D, b: Point2D) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  type distance = (a: Point2D, b: Point2D) => number;

  const distance3: distance = (a, b) => {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  };

  interface Person {
    firstName: string;
    lastName: string;
  }
  interface PersonWithBirthDate extends Person {
    birth: Date;
  }

  type PersonWithBirthDateT = Person & { birth: Date };

  interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
  }

  interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
  }

  type TopNavStateT = {
    userId: State["userId"];
    pageTitle: State["pageTitle"];
    recentFiles: State["recentFiles"];
  };

  type TopNavStateMappedType = {
    [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
  };

  type MyPick<T, K extends keyof T> = {
    [k in K]: T[k];
  };

  interface SaveAction {
    type: "save";
    // ...
  }
  interface LoadAction {
    type: "load";
    // ...
  }

  type Action = SaveAction | LoadAction;
  type ActionType = Action["type"];
  //   ^? "save" | "load"
  type ActionT = (SaveAction | LoadAction)["type"];
  type MyExtract<T, K extends keyof T> = T[K];

  type ActionTT = MyExtract<Action, "type">;

  type MyOptional<T, K extends keyof T> = {
    [k in K]?: T[k];
  };

  const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: "#00FF00",
    label: "VGA",
  };
  interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
  }

  type OptionsT = typeof INIT_OPTIONS;
  function getUserInfo(userId: string) {
    // ...
    return { userId, name, age, height, weight, favoriteColor };
  }

  type UserInfo = ReturnType<typeof getUserInfo>;
  type MyReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;

  interface Name {
    first: string;
    last: string;
  }

  type DancingDuo<T extends Name> = [T, T];
  //다음 코드는 타입에러를 발생할까요?
  const couple: DancingDuo<Name & { middle: string }> = [
    { first: "Fred", last: "Astaire" },
    { first: "Ginger", last: "Rogers" },
  ];

  const couple2: DancingDuo = [
    { first: "Fred", last: "Astaire" },
    { first: "Ginger", last: "Rogers" },
  ];

  const dancingDuo = <T extends Name>(x: DancingDuo<T>) => x;
  const couple1 = dancingDuo([
    { first: "Fred", last: "Astaire" },
    { first: "Ginger", last: "Rogers" },
  ]);
}

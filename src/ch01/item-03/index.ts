interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    //'Rectangle' only refers to a type, but is being used as a value here.
    //Translation: I was expecting A as a type declaration but it is being used as a value here.
    return shape.width * shape.height;
    //Property 'height' does not exist on type 'Shape'.
  } else {
    return shape.width * shape.width;
  }
}

function calculateArea(shape: Shape) {
  if ("height" in shape) {
    //'Rectangle' only refers to a type, but is being used as a value here.
    //Translation: I was expecting A as a type declaration but it is being used as a value here.
    return shape.width * shape.height;
    //                    ^?
    //Property 'height' does not exist on type 'Shape'.
  } else {
    return shape.width * shape.width;
  }
}

interface Square {
  kind: "square";
  width: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
    //                      ^?
  } else {
    return shape.width * shape.width;
    //                     ^?
  }
}

{
  class Square {
    constructor(public width: number) {}
  }

  class Rectangle extends Square {
    constructor(public width: number, public height: number) {
      super(width);
    }
  }

  type Shape = Square | Rectangle;
  function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
      return shape.width * shape.height;
      //       ^?
    } else {
      shape; // Type is Square
      return shape.width * shape.width; // OK
      //       ^?
    }
  }
}

function asNumber(val: number | string): number {
  return val as number;
}

const num = asNumber("123");
//    ^?
console.log(num); //"123"

function asNumber(val: number | string) {
  return typeof val === "string" ? Number(val) : val;
}

const num = asNumber("123");
//    ^?
console.log(num); // 123

/**
 * Runtime Types May Not Be the Same as Declared Types
 */

function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log(`I'm afraid I can't do that.`);
  }
}

interface LightApiResponse {
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch("/light");
  const result: LightApiResponse = await response.json();
  //      ^?
  setLightSwitch(result.lightSwitchValue);
  //                      ^?
}

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
  return a + b;
}

add(1,2)
//^?
add("Hello", "World")
//^?
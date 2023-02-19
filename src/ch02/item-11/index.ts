{
  interface Room {
    numDoors: number;
    ceilingHeightFt: number;
  }

  const roomLiteral: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: "present",
    //Type '{ numDoors: number; ceilingHeightFt: number; elephant: string; }' is not assignable to type 'Room'.
  };

  const rData = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: "present",
  };

  const roomStructural: Room = rData;

  interface LineChartOptions {
    logscale?: boolean;
    invertedYAxis?: boolean;
    areachart?: boolean;
  }

  const opts = { logScale: true };
  const o: LineChartOptions = opts;
  //Type '{ logScale: boolean; }' has no properties in common with type 'LineChartOptions'.

  
  const o1: Options = { title: true, other: "other" };
  interface Options {
    title: true;
    darkMode?: true;
    [otherOptions: string]: unknown;
  }
  //다음 코드는 에러를 발생할까요?
  const o2: Options = { title: true, darkmode: true };
}

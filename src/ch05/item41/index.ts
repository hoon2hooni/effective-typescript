{
  function range(start: number, limit: number) {
    const out = [];
    //     ^?
    for (let i = start; i < limit; i++) {
      out.push(i);
    }
    return out;
  }
  {
    const result = [];
    result.push("a");
    result;
    // ^?
    result.push(1);
    result;
    // ^?
  }
  {
    let val;
    if (Math.random() < 0.5) {
      val = /hello/;
      val;
      //^?
    } else {
      val = 12;
      val;
      //^?
    }
    val;
    //^?
  }
  {
    let val: any;
    if (Math.random() < 0.5) {
      val = /hello/;
      val;
      //^?
    } else {
      val = 12;
      val;
      //^?
    }
    val;
    //^?
  }
  {
    function range(start: number, limit: number) {
      const out = [];
      if (start === limit) {
        return out;
      }
      for (let i = start; i < limit; i++) {
        out.push(i);
      }
      return out;
    }
  }
  {
    function makeSquares(start: number, limit: number) {
      const out = [];
      range(start, limit).forEach((i) => {
        out.push(i * i);
      });
      return out;
    }
  }
}

{
  interface Vector2D {
    x: number;
    y: number;
  }
  function calculateNorm(p: Vector2D) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }

  calculateNorm({ x: 3, y: 4 }); // OK, result is 5
  const vec3D = { x: 3, y: 4, z: 1 };
  calculateNorm(vec3D);
  {
    interface Vector2D {
      _brand: "2d";
      x: number;
      y: number;
    }
    function vec2D(x: number, y: number): Vector2D {
      return { x, y, _brand: "2d" };
    }
    function calculateNorm(p: Vector2D) {
      return Math.sqrt(p.x * p.x + p.y * p.y); // Same as before
    }
    calculateNorm(vec2D(3, 4)); // OK, returns 5
    const vec3D = { x: 3, y: 4, z: 1 };
    calculateNorm(vec3D);
    type AbsolutePath = string & { _brand: "abs" };
    function listAbsolutePath(path: AbsolutePath) {
      // ...
    }
    function isAbsolutePath(path: string): path is AbsolutePath {
      return path.startsWith("/");
    }
    function f(path: string) {
      if (isAbsolutePath(path)) {
        listAbsolutePath(path);
      }
      listAbsolutePath(path);
    }

    {
      function binarySearch<T>(xs: SortedList<T>[], target: T): boolean {
        let low = 0,
          high = xs.length - 1;
        while (high >= low) {
          const mid = low + Math.floor((high - low) / 2);
          const v = xs[mid];
          if (v === target) return true;
          [low, high] = target > v ? [mid + 1, high] : [low, mid - 1];
        }
        return false;
      }

      type SortedList<T> = T[] & { _brand: "sorted" };
      function isSorted<T>(xs: T[]): xs is SortedList<T> {
        for (let i = 1; i < x.length; i++) {
          if (xs[i] < xs[i - 1]) {
            return false;
          }
        }
        return true;
      }
      {
        type Meters = number & { _brand: "meters" };
        type Seconds = number & { _brand: "seconds" };
        const meters = (m: number) => m as Meters;
        const seconds = (s: number) => s as Seconds;
        const oneKm = meters(1000); // Type is Meters
        const oneMin = seconds(60); // Type is Seconds
        //다시 돌아와....
        const tenKm = oneKm * 10; // Type is number 
        const v = oneKm / oneMin;
      }
    }
  }
}

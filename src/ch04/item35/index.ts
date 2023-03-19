import { Feature, Geometry } from "geojson";
{
  function calculateBoundingBox(f: Feature): BoundingBox | null {
    let box: BoundingBox | null = null;
    const helper = (coords: any[]) => {
      // ...
    };
    const { geometry } = f;
    const geometryHelper = (g: Geometry) => {
      if (g.type === "GeometryCollection") {
        g.geometries.forEach(geometryHelper);
      } else {
        helper(g.coordinates); // OK
      }
    };
    if (geometry) {
      geometryHelper(geometry); // ~~~~~~~~~~~
    }
    return box;
  }
}

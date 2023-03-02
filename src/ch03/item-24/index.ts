{
  const borough = { name: "Brooklyn", location: [40.688, -73.979] };
  const loc = borough.location;

  interface Coordinate {
    x: number;
    y: number;
  }

  interface BoundingBox {
    x: [number, number];
    y: [number, number];
  }

  interface Polygon {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
  }

  {
    const isPointInPolygon = (polygon: Polygon, pt: Coordinate) => {
      const box = polygon.bbox;
      if (box) {
        if (
          pt.x < box.x[0] ||
          pt.x > box.x[1] ||
          pt.y < box.y[1] ||
          pt.y > box.y[1]
        ) {
          // OK
          return false;
        }
      }
      // ...
    };
  }

  {
    const isPointInPolygon = (polygon: Polygon, pt: Coordinate) => {
      const { bbox } = polygon;
      if (bbox) {
        const { x, y } = bbox;
        if (pt.x < x[0] || pt.x > x[1] || pt.y < x[0] || pt.y > y[1]) {
          return false;
        }
      }
      // ...
    };
  }
  {
    const { bbox } = polygon;
    if (!bbox) {
      calculatePolygonBbox(polygon); // Fills in polygon.bbox
      // Now polygon.bbox and bbox refer to different values!
    }
      
  }
}

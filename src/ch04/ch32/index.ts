{
  {
    interface Layer {
      layout: FillLayout | LineLayout | PointLayout;
      paint: FillPaint | LinePaint | PointPaint;
    }
  }
  {
    interface FillLayer {
      layout: FillLayout;
      paint: FillPaint;
    }
    interface LineLayer {
      layout: LineLayout;
      paint: LinePaint;
    }
    interface PointLayer {
      layout: PointLayout;
      paint: PointPaint;
    }
    type Layer = FillLayer | LineLayer | PointLayer;
  }
  {
    interface FillLayer {
      type: "fill";
      layout: FillLayout;
      paint: FillPaint;
    }
    interface LineLayer {
      type: "line";
      layout: LineLayout;
      paint: LinePaint;
    }
    interface PointLayer {
      type: "paint";
      layout: PointLayout;
      paint: PointPaint;
    }
    type Layer = FillLayer | LineLayer | PointLayer;
    function drawLayer(layer: Layer) {
      if (layer.type === "fill") {
        const { paint } = layer; // Type is FillPaint
        const { layout } = layer; // Type is FillLayout
      } else if (layer.type === "line") {
        const { paint } = layer; // Type is LinePaint
        const { layout } = layer; // Type is LineLayout
      } else {
        const { paint } = layer; // Type is PointPaint
        const { layout } = layer; // Type is PointLayout
      }
    }
    interface Person {
      name: string;
      birth?: {
        place: string;
        date: Date;
      };
    }

    const alanT: Person = {
      name: "Alan Turing",
      birth: {
        place: "London",
      },
      // ~~~~ Property 'date' is missing in type
      // //
    };

    function eulogize(p: Person) {
      console.log(p.name);
      const { birth } = p;
      if (birth) {
        console.log(`was born on ${birth.date} in ${birth.place}.`);
      }
    }

    {
      interface Name {
        name: string;
      }
      interface PersonWithBirth extends Name {
        placeOfBirth: string;
        dateOfBirth: Date;
      }

      type Person = Name | PersonWithBirth;

      function eulogize(p: Person) {
        if ("placeOfBirth" in p) {
          p; // Type is PersonWithBirth
          const { dateOfBirth } = p; // OK, type is Date
        }
      }
    }
  }

  {
    type Param1 = string | number;
    type Param2 = string;

    type Func1 = (p: string | number) => void;
    type Func2 = (p: string) => void;

    let a: Func1 = (p) => {};
    let b: Func2 = (p) => {};
    b = a;
  }
}

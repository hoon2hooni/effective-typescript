{
  let age: number;
  age = "12";
  //^?
  //Type 'string' is not assignable to type 'number'.
  age = "12" as any; // OK
  //^?

  function calculateAge(birthDate: Date): number {
    // ...
    return birthDate.getTime(); // OK
  }
  let birthDate: any = "1990-01-19";
  //  ^?
  calculateAge(birthDate);
  //에러 발생

  interface Person {
    first: string;
    last: string;
  }

  let person: Person = {
    first: "Jane",
    last: "Doe",
  };

  let personAny: any = {};

  const formatName = (p: Person) => `${p.first} ${p.last}`;
  const formatNameAny = (p: any) => `${p.first} ${p.last}`;
  // interface ComponentProps {
  //   onSelectItem: (item: any) => void;
  // }
  function renderSelector(props: ComponentProps) {
    /* ... */
  }

  function handleSelectItem(item: any) {
    const selectedId = item.id;
  }
  renderSelector({ onSelectItem: handleSelectItem });
  /**리펙토링 후 */
  interface ComponentProps {
    onSelectItem: (id: number) => void;
  }

  //handleSelectItem안에 item이 any기에 타입체크는 성공했지만
  //런타임 에러가 발생합니다.

  
}

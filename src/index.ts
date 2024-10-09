export interface Test {
  foo: string;
  bar: number;
}

export function CreateTest(foo: string, bar: number): Test {
  return {
    foo,
    bar,
  };
}

export type Common<T, U> = {
  [key in keyof T & keyof U]: T[key] extends true ? key : never;
}[keyof T & keyof U];

type ifElse<T, U> = Common<T, U> extends never ? keyof T : Common<T, U>;

type test = Pick<
  { a: 1; b: 2; c: 3 },
  ifElse<{ a: false; b: false; c: true },{ a: 1; b: 2; c: 3 }>
>;

export type BooleanOf<T> = { [P in keyof T]: true | false };

export type User = {
  name: string;
  age: number;
  phone: string;
  address: string;
  vehicle: string;
};

type last<T extends unknown[]> = T extends [...infer Head, infer Tail] ? Tail :[...T]

// type Reverse<T extends unknown[]> = T extends [ infer Head,  ...infer Rest]
//        ? [...Reverse<Rest>, Head] : [];

type Revert<T extends unknown[]> = T extends [ infer Head,  ...infer Rest]
       ? [...Revert<Rest>, Head] : [];
    
type rows = "1"|"2"|"3"|"4"
type columns = "a"|"b"|"c"|"d"

type Positions = `${rows}${columns}`
type possiblePositons = [Positions];

const currentPosition: Positions = "2a";



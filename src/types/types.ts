import { type } from "node:os";

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


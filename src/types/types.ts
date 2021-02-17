

// type ifElse<T, U> = Common<T, U> extends never ? keyof T : Common<T, U>;

// type test = Pick<
//   { a: 1; b: 2; c: 3 },
//   ifElse<{ a: false; b: false; c: true },{ a: 1; b: 2; c: 3 }>
// >;



export type User = {
  name: string;
  age: number;
  phone: string;
  address: string;
  vehicle: string;
};

export type BooleanOf<T> = { [P in keyof T]?: boolean };

type Get<T, U extends keyof T> = { [P in U]-?: T[P] }

type BooleanUser = BooleanOf<User>

export type Common<T extends BooleanOf<U> | "*", U> =  T extends "*"  ? keyof U : {
  [key in keyof T & keyof U]: T[key] extends true ? key
  : never;
}[keyof T & keyof U];


// type test = Common<"*", { a: 1, b: 2 }>

// type test = Get<{a:1,b:2},"a">

declare function getUserDetails<T extends User, U extends BooleanUser | "*">(id: number, props: U): Optional<T> & Get<Optional<T>, Common<U, T>>;

const result = getUserDetails(1, "*");





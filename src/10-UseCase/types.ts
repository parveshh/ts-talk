export type User = {
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
};




// making all props of type T boolean and optional
type BooleanOf<T> = { [P in keyof T]?: boolean };

// making all types of type T optional
type Optional<T> = {
  [Property in keyof T]+?: T[Property]
}

// getting only keys of type T given in U and making it mandatory
type Get<T, U extends keyof T> = { [P in U]-?: T[P] }

// getting all the common keys only if a key in T is true , but if T is '*' then get all the keys from U
type Common<T extends BooleanOf<U> | "*", U> = T extends "*" ? keyof U : {
  [key in keyof T & keyof U]: T[key] extends true ? key
  : never;
}[keyof T & keyof U];


declare function getUserDetails<T extends User, U extends BooleanOf<User> | "*">(id: number, props: U): Get<Optional<T>, Common<U, T>>;

const result = getUserDetails(1, { address: true, name: true, email: false });








// community types
// collection of lots of reusable types :
//https://github.com/sindresorhus/type-fest
//https://github.com/type-challenges/type-challenges

// below type is taken from : https://github.com/ahejlsberg/tsconf2020-demos/blob/master/template/main.ts

type PathKeys<T> = object extends T ? string :
  T extends readonly any[] ? Extract<keyof T, `${number}`> | SubKeys<T, Extract<keyof T, `${number}`>> :
  T extends object ? Extract<keyof T, string> | SubKeys<T, Extract<keyof T, string>> :
  never;

type SubKeys<T, K extends string> = K extends keyof T ? `${K}.${PathKeys<T[K]>}` : never

type PropType<T, Path extends string> = Path extends keyof T ? T[Path] :
  Path extends `${infer K}.${infer R}` ? K extends keyof T ? PropType<T[K], R> : unknown : unknown;

declare function getProperty<T, P extends PathKeys<T>>(obj: T, path: P): PropType<T, P>;

const test = {
  a: 3,
  b: {
    c: 4,
    d: {
      e: 5,
      f: [6, 7]
    }
  }
}
getProperty(test, 'b.d.e')


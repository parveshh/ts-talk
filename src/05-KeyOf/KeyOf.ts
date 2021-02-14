// to get value of a property
// function getProperty(obj:any, prop:any){
//     return obj[prop]
// }

type user = {
  id: number;
  name: string;
};

type UserKeys = keyof user; // will be a union type of "id"|"name"
const userKeys: UserKeys = "id";

function getProperty<T>(obj: T, prop: keyof T) {
  return obj[prop];
}

const result = getProperty({ a: 1, b: 2 }, "a");
result;

// to get value of a property
// function getProperty(obj:any, prop:any){
//     return obj[prop]
// }

function getProperty<T>(obj: T, prop: keyof T) {
  return obj[prop];
}

const result = getProperty({ a: 1, b: 2 }, "a");
result;

// to get value of a property



const person = {
  name:"person",
  dob:"17/04/85",
  address:"test"
}
type Keys<T> = keyof T;
type User = {
  id: number;
  name: string;
};

const customer : User = {id:1, name:"John"}


function getProperty<T>(obj:T, prop:Keys<T>){
    return obj[prop]
}

console.log(getProperty<User>(customer, "id"))

{


// function getProp(obj,pro){
//   if(obj.hasOwnProperty(prop)){
//     return obj[prop]
//   }
// }

// can be used where we want to narrow down params to key of a type

type UserKeys = keyof User; // will be a union type of "id"|"name"

function getProperty(obj: User, prop: UserKeys) {
  return obj[prop];
}

}
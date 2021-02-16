// to get value of a property
function getProperty(obj:any, prop:any){
    return obj[prop]
}

{
type User = {
  id: number;
  name: string;
};

const customer : User = {id:1, name:"John"}

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
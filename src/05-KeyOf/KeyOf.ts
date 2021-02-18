
type User = {
  id: number;
  name: string;
  email: string
};

const user: User = { id: 1, name: "test user", email: "test@test.com"}

{

  // can be used where we want to narrow down params to key of a type

  type UserKeys = keyof User; 

  function getProperty(obj: User, prop: UserKeys) {
    return obj[prop];
  }
  //getProperty(user, "")
}
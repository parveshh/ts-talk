// Template Literal types
{
  type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  type Position = `${Row}${Column}`;

  function movePlayer(args: Position){

  }


}
{
  type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

  // remove key U from T
  type Remove<T, U> = T extends U ? never : T;

  // remove zero from numbers
  type NonZero = Remove<Numbers, 0>;

  // template literals types are constrained to 10,000 combinations
  type Year = `${NonZero}${Numbers}${Numbers}${Numbers}`




  type Customer = {
    id: number,
    YearOfRegistration: Year
  }

  const cust:Customer = {
    id:1,
    YearOfRegistration:"1000"
  }
}
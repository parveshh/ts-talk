// Template Literal types
{
  type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  type Position = `${Row}${Column}`

  function movePlayer(postion:Position){

  }



}
{
  type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

  type Remove<T, U> = T extends U ? never : T;

  type NonZero = Remove<Numbers, 0>;

  type Year = `2${Numbers}${Numbers}${Numbers}`




  type Customer = {
    id: number,
    YearOfRegistration: Year
  }

  const cust:Customer = {
    id:1,
    YearOfRegistration:"2019"
  }
}
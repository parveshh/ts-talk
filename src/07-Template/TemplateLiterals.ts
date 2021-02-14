// Template Literal types
{
  type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  const row: Row = 1;
  const column: Column = 1;

  type Position = `${Row}${Column}`;
}
{
  type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

  type Remove<T, U> = T extends U ? never : T;

  type NonZero = Remove<Numbers, 0>;

}
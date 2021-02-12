import { BooleanOf, Common } from "../types/types";

export interface Repository<T> {
  select<U extends BooleanOf<T>>(props: Partial<U>): Pick<T, Common<U, T>>;
}

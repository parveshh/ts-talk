import { BooleanOf, Common } from "../10-UseCase/types";

export interface Repository<T> {
  select<U extends BooleanOf<T>>(props: Partial<U>): Pick<T, Common<U, T>>;
}

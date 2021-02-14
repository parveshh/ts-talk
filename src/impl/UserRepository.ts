import { Repository } from "../interfaces/Repository";
import { BooleanOf, Common, User } from "../types/types";

export class UserRepository implements Repository<User> {
  select<U extends Partial<BooleanOf<User>>>(
    props: Partial<U>
  ): Pick<User, Common<U, User>> {
    throw new Error("Not Implemented");
  }
}

const u = new UserRepository();

const res = u.select({ address: true, age: false });

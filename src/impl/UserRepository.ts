import { Repository } from "../interfaces/Repository";
import { BooleanOf, Common, User } from "../types/types";
type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type NumNonZero = Exclude<Num,0>
type Year = `${NumNonZero}${Num}${Num}${Num}`
export class UserRepository implements Repository<User> {
  select<U extends Partial<BooleanOf<User>>>(
    props: Partial<U>
  ): Pick<User, Common<U, User>> {
    throw new Error("Not Implemented");
  }

  getUsersByYear(year:Year ): User[] {
    throw new Error("Not Implemented");
  }
}

const u = new UserRepository();

const res = u.select({ address: true, age: false });

u.getUsersByYear('2006')

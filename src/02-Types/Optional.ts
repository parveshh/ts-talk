import { CreditCard, DebitCard } from "./Complex";

type User = {
  id: number;
  creditCard?: CreditCard; // optional type
  debitCard: DebitCard;
};

/**
 *
 * show here that we cannot access creditCard without null checks
 */
function hasCreditCard(user: User): boolean {
  // return user.creditCard.cancelled;

  return false;
}

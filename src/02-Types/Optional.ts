import { CreditCard, DebitCard } from "./Complex";

type User = {
  id: number;
  creditCard?: CreditCard; // optional type
  debitCard: DebitCard;
};

function cardDetails(user: User) {
  // return user.creditCard.cancelled;
}

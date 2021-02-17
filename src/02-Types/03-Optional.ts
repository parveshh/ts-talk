import { CreditCard, DebitCard } from "./02-Complex";

type BankCustomer = {
  id: number;
  creditCard?: CreditCard; // optional type is denoted by ?
  debitCard: DebitCard;
};

{
  function hasCreditCard(user: BankCustomer): boolean {

    // if(user.creditCard !== undefined){
    //   user.creditCard.
    // }
    
      return false;
    }
}


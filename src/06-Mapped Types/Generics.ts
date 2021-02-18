// Types have full support for generics

// lets look at a previous type and how we can use generics in that

import { CreditCard, DebitCard } from "../02-Types/02-Complex";

// lets import our card types

// index type
// type Card = {
//   [cardName: string]: CreditCard | DebitCard
// }

type Card<T> = {
    [property:string] : T
}

const userCards: Card<DebitCard | CreditCard> = {
  "shopping card" : {cancelled: true, cardExpiry: "10/12", cardNumber:"2134325436456", cardType:"Credit"},
  "cashback card" : {cancelled: true, cardExpiry: "10/12", cardNumber:"2134325436456", cardType:"Debit"},
}

// so lets now talked about index types

import { CreditCard, DebitCard } from "../02-Types/02-Complex";

// lets import our card types

// index type
type Card = {
  [cardName: string]: CreditCard | DebitCard
}


const userCards: Card = {
  "shopping card" : {cancelled: true, cardExpiry: "10/12", cardNumber:"2134325436456", cardType:"Debit"},
  "cashback card" : {cancelled: true, cardExpiry: "10/12", cardNumber:"2134325436456", cardType:"Debit"},
}


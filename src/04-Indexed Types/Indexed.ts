
import { CreditCard, DebitCard } from "../02-Types/02-Complex";

// lets import our card types

// index type
type Card = {
  [cardName: string]: CreditCard | DebitCard
}

const userCards: Card = {
  "Shopping_Card" : {cancelled: true, cardExpiry: "10/12", cardNumber:"2134325436456", cardType:"Debit"},
  "Cashback_Card" : {cancelled: true, cardExpiry: "10/12", cardNumber:"2134325436456", cardType:"Debit"},
}


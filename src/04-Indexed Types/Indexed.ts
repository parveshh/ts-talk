// so lets now talked about indexed types

import { CreditCard, DebitCard } from "../02-Types/Complex";

// lets import our card types

type Card = CreditCard | DebitCard;

type User = {
  id: number;
  name: string;
  cards: Card[];
};

const user: User = {
  id: 1,
  name: "Andy",
  cards: [
    {
      cancelled: true,
      cardExpiry: "10/22",
      cardNumber: "1122334455667788",
      cardType: "Credit",
    },
  ],
};

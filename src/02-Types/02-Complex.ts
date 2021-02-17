//Complex types
export type CreditCard = {
  cardNumber: string;
  cardExpiry: string;
  cardType: "Credit"; // we have literal type, we cannot assign anything else to this
  cancelled: boolean;
};

export type DebitCard = {
  cardNumber: string;
  cardExpiry: string;
  cardType: "Debit";
  cancelled: boolean;
};


// Objects of types
const card1: CreditCard = {
  cancelled:false,
  cardExpiry:"10/22",
  cardNumber:'3244545',
  cardType: "Credit"
}

const card2: DebitCard = {
  cardExpiry: "01/22",
  cardNumber: "0345890776548765",
  cancelled: false,
  cardType: "Debit",
};

// required props
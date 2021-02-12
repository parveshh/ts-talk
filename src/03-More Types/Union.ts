import { CreditCard, DebitCard } from "../02-Types/Complex";

type StringNumber = string | number;

let date: StringNumber = "10/12/2020"; // date could be a string or a utc timestamp

date = 10009000567;

type AnyCard = CreditCard | DebitCard;
const mycard: AnyCard = {
  cancelled: true,
  cardExpiry: "10/22",
  cardNumber: "23417868909876534",
  cardType: "Debit", // so her we can select which card this is
};


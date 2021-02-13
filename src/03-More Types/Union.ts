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

/// Discriminated Union

type SportsCar = {
  make: string;
  model: string;
  kind: "sports";
  topSpeed: number;
};

type Truck = {
  make: string;
  model: string;
  towingCapacity: number;
  kind: "carrier";
};

type Vehicle = SportsCar | Truck;

function getTowingCapacity(vehicle: Vehicle): number {
  // show the dotted paths not showing all properties
  switch (vehicle.kind) {
    case "carrier": // show the intellisense popup here
      return vehicle.towingCapacity;
    case "sports":
      return 0;
    default:
      throw Error(`Unknown vehicle ${vehicle}`);
    //vehicle.  /// show the never type here as now we have stripped away both types, this will be never
  }
}

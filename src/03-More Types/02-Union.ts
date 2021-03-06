import { CreditCard, DebitCard } from "../02-Types/02-Complex";

type StringNumber = string | number; // Union Type

let date: StringNumber = "10/12/2020"; // date could be a string or a utc timestamp

date = 10009000567; // ms

type Card = CreditCard | DebitCard;

const mycard: Card = {
  cancelled: true,
  cardExpiry: "10/22",
  cardNumber: "23417868909876534",
  cardType: "Debit", // so her we can select which card this is
};


{
  /// Discriminated Union: Types don't have similar props

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

  // control flow analysis
  function getTowingCapacity(vehicle: Vehicle): number {
  
    {
      switch (vehicle.kind) {
        case "carrier":
          return vehicle.towingCapacity;
        case "sports":
          return 0;
        default:
          throw Error(`Unknown vehicle ${vehicle}`);
      }
    }
  }
}
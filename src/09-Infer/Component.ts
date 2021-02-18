import { NumericLiteral } from "typescript";

interface ComponentProps {
    x: number;
    y: number;
    z: number;
    a: number;
  }

  export const component = ({ x, y, z }: ComponentProps) => {
    // some functionality here
  };

// Primitive types
let a: string = "Hello";
let b: boolean = true;
let c: number = 123;
let d: bigint = 123n;
let list: number[] = [1,2,3]

{
  enum Color {
    Red,
    Green,
    Blue,
  }
  let color: Color = Color.Blue
}

{
  {
    // basic types
    let supervisor: null = null; // special types

    let j: undefined = undefined;

    {
      let supervisor = "None"; // I have a supervisor named "None"
      let supervisor = null; // I don't have a supervisor"
      let supervisor = undefined; // Maybe I have, maybe I don't, I don't know or care
    }
  }

  {
    // typescript types
    let g: any = {}; // should only be used in special cases
    let h: unknown = "name"; // before using we need to check what is the type

    {
      //Unknown
      let _a: any = 10; // we can assign anything to any
      let _u: unknown = 10; // we can assign anything to unknown just like any

      let s1: string = _a; // any is assignable to anything
      let s2: string = _u; // invalid as we cannot assign _unknown to any othertype (without an explicit assertion)

      {
        if (typeof _u === "string") {
          let s3: string = _u;
        }
      }
    }

    {
      let i: void;
      let j: never; // this will never happen
      

      function throwError(): never {
        throw new Error("whoops!!"); // function throws before reaching the end
      }

      {
        let k: number & string = "this makes no sense";
      }

      {
        function testMe(): never {
          
        }

        let a=1
        testMe()
        let b=2
      }
    }
  }
}

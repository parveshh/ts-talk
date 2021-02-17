// Primitive types
let a: string = "Hello";
let b: boolean = true;
let c: number = 123;
let d: bigint = 123n;
let list: number[] = [1,2,3]

enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Blue

// basic types
let e: null = null; // special types
let f: undefined = undefined;

// typescript types
let g: any = {}; // should only be used in special cases
let h: unknown = "name";// before using we need to check what is the type
let i: never // this will never happen
let j: void

{
  //Unknown
  let _any: any = 10             // we can assign anything to any
  let _unknown: unknown = 10     // we can assign anything to unknown just like any

  let s1: string = _any     // any is assignable to anything
  let s2: string = _unknown // invalid as we cannot assign _unknown to any othertype (without an explicit assertion)
  
  {
    if(typeof _unknown === 'string'){
      let s3: string = _unknown
    }
  }
}

{
  function throwError(): never {
    throw new Error("whoops!!")
  }
    {
      let k: number & string = "this makes no sense"
    }
}

// Primitive types
let a: string = "Hello";
let b: boolean = true;
let c: number = 123;
let d: bigint = 123n;
let e: null = null;
let f: undefined = undefined;
let g: any = {};
let h: unknown // before assignment we need to check what is the type

// important here that null and undefined are also types so we have to define an object to be of type null to assign it null, else
// we cannot assign null
// a = null;

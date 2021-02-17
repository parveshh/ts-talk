// Primitive types
let a: string = "Hello";
let b: boolean = true;
let c: number = 123;
let d: bigint = 123n;

// typescript types
let e: null = null; // special types
let f: undefined = undefined;
let g: any = {}; // should only be used in special cases
let h: unknown = "name";// before using we need to check what is the type
let i: never // this will never happen

// if(typeof h === 'string'){
    
// }

// important here that null and undefined are also types so we have to define an object to be of type null to assign it null, else
// we cannot assign null
// a = null;

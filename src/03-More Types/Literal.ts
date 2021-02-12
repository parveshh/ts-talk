// This is a simple one, with typescript we can define any thing as a type
let activate: true;

//we have defined activate to be type 'true', no other value could be assigned to this

// activate = false; // ts compiler will complain

let newType: 18; // here we have defined a type which can only be literal 18 and nothing else
// similarly we can define literal types for anything

newType = 18;

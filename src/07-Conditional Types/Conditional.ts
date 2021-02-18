// a conditional type is where the infrence on type relies on a condition

type Person = {
    name: string,
    email: string,
    phone: string | null,
    address: string | null
}

// get only the keys which are note extended by null
type RequiredKeys<T> = { [P in keyof T]: null extends T[P] ? never : P }[keyof T]

//extract key values for non null keys of type T
type RequiredProps<T> = {
    [Property in RequiredKeys<T>]: T[Property]
}

const person: RequiredProps<Person> = { email: "test@test.com", name: "test" }

// type to test Extends
type Extends<T, U> = T extends U ? "Yes" : "No"

// why null extends T[P] and not T[P] extends null
type TestExtends = Extends<string | null, null>








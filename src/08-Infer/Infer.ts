import { component } from "./Component";


type ComponentType<T> = T extends (args: infer arg)=> infer _Result ? arg : never 
 

//const componentProps: ComponentType<typeof component> =  {}
import { component } from "./Component";



// type ComponentType<T> = T extends (args: infer arg)=> infer _Result ? arg : never;



// const componentProps: ComponentType<typeof component> =  {z}

const func = (x:number) => x+1
type CallBack<F> = F extends (...args: infer _A) => infer R ? R : never


//type ReturnFunction<T> = () => CallBack<T>;

function performAction<T,U extends Function>(arg:T, callback:U): CallBack<U> {

    // some functionality here

    return callback(arg);

}

const result = performAction("1", (a:string) => a)

// const val = result()
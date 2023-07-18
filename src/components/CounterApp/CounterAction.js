import { DECREMENT, INCREMENT } from "./CounterType"

export const inc_Counter = () =>{
    return{
        type:INCREMENT
    }
}

export const dec_Counter = () =>{
    return{
        type:DECREMENT
    }
}
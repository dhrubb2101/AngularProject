import { createReducer,on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";
import { state } from "@angular/animations";


export interface CounterState{  
    count: number //what type of data we're going to fetch so we mention the datatype.
    //we declare the state
}

export const initialCounterState:CounterState = {
    count:100 // we initialize the state
}

export const counterReducer = createReducer(
    initialCounterState,
    on(increment,(state)=>({...state,count:state.count+1})),  //...state means we are loading every item, but within it we're just changing item by the name of count.
    on(decrement,(state)=>({...state,count:state.count-1})),  //...state means we are loading every item, but within it we're just changing item by the name of count.
    on(reset,(state)=>({...state,count:0})),  //...state means we are loading every item, but within it we're just changing item by the name of count.
    // on(decrement,(state)=>({...state,count:state.count-1}))

//here we implement the reducer

)
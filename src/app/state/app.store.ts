import { CounterState } from "./counter/counter.reducer";

export interface AppState{
    counter:CounterState //here we create a state AppState and store our data in it ,from here everyone can access the data and if you want it to be accessed by other files use export

}
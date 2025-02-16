import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.store';
import { selectCount } from '../../state/counter/counter.selector';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { decrement, increment, reset } from '../../state/counter/counter.action';

@Component({
  selector: 'app-datalist',
  imports: [CommonModule,MatButtonModule],
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.css'
})
export class DatalistComponent {



  count:Observable<number>;

  constructor(private store:Store<AppState>){
    this.count = this.store.select(selectCount)
    console.log(this.count)
  }

  incrementCounter(option:string){
    if(option==="inc"){
      this.store.dispatch(increment());
    }else if(option==="dec"){
      this.store.dispatch(decrement());
    }else if(option==="reset"){
      this.store.dispatch(reset());
    }
    
  }
}

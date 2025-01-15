import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myGenderCustomPipe'
})
export class MyGenderCustomPipePipe implements PipeTransform {

  transform(value: any, gender: string): unknown {
    if(gender.toLocaleLowerCase()==="male"){
      return "Mr."+value;
    }else{
      return "Miss."+value;
    }
  }

}


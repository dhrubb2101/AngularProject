import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySquareCusomPipe'
})
export class MySquareCusomPipePipe implements PipeTransform {

  transform(val:any): unknown {
    return val**2;
  }

}

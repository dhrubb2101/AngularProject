import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaOfCircleCusomPipe'
})
export class AreaOfCircleCusomPipePipe implements PipeTransform {

  transform(val:any): unknown {
    return val**2*3.14;
  }

}

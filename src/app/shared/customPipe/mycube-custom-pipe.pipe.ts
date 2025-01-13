import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycubeCustomPipe'
})
export class MycubeCustomPipePipe implements PipeTransform {

  transform(val:any): unknown {
    return val**3;
  }

}

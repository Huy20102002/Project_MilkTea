import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeProduct'
})
export class PipeProductPipe implements PipeTransform {

  transform(value: any): string {
    if(value==1){
      return "Hiện";
    }else{
      return "Ẩn";
    }
  
  }

}

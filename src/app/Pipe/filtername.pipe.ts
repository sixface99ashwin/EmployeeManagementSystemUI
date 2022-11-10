import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {

  transform(value: any[],filterString:string,propname:string): any[] {
    const result:any=[];
    if(!value || filterString===''|| propname===''){
      return value;
    }
    for(const item of value){
      if(item[propname]=== filterString){
        result.push(item);
      }
    }
    return result;
  }

}

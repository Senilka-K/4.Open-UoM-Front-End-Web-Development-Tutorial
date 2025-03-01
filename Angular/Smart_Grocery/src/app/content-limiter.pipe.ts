import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimiter',
  standalone: true
})
export class ContentLimiterPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 50){
      return value.substring(0, 49)+ '...';
    }
    return value;
  }

}

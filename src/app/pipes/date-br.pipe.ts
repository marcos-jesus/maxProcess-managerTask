import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBR'
})
export class DateBRPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value
    const date = new Date(value)
    return date.toLocaleDateString('pt-BR')
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statistiqueStyle',
})
export class StatistiqueStylePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Started':
        return 'rounded-circle border border-primary text-dark d-flex justify-content-center align-items-center';
        break;
      case 'In progress':
        return 'rounded-circle border border-warning text-dark d-flex justify-content-center align-items-center';
        break;
      case 'Done':
        return 'rounded-circle border border-success text-dark d-flex justify-content-center align-items-center';
        break;

      default:
        return '';
        break;
    }
  }
}

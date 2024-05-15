import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btnStyle',
})
export class BtnStylePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Started':
        return 'btn btn-outline-primary';
        break;
      case 'In progress':
        return 'btn btn-outline-warning';
        break;
      case 'Done':
        return 'btn btn-outline-success';
        break;

      default:
        return '';
        break;
    }
  }
}

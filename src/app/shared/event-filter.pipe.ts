import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'eventFilter' })
export class EventFilterPipe implements PipeTransform {
    transform(value: any[], searchFor: string): any[] {
        if (!searchFor) return value;
        searchFor = searchFor.toLowerCase();
        return value.filter(event =>
            event.name.toLowerCase().indexOf(searchFor) >= 0 ||
            event.date.toLowerCase().indexOf(searchFor) >= 0);
    }

}
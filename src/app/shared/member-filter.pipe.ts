import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'memberFilter' })
export class MemberFilterPipe implements PipeTransform {
    transform(value: any[], searchFor: string): any[] {
        if (!searchFor) return value;
        searchFor = searchFor.toLowerCase();
        return value.filter(member =>
            member.name.toLowerCase().indexOf(searchFor) >= 0 ||
            member.surname.toLowerCase().indexOf(searchFor) >= 0);
    }

}
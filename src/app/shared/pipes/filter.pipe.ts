import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter"
})

export class FilterPipe implements PipeTransform {

    constructor() { }
    transform(value: any, args?: any) {

        if (args === 'completed') {
            return value.filter((val: any) => val.todo_completed === true);
        } else if (args === 'incomplete') {
            return value.filter((val: any) => val.todo_completed === false);
        }
    }
}
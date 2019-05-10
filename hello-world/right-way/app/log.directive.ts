import { Directive } from "@angular/core";

@Directive({
    selector: 'input[log-directive]',
    host: {
        '(input)': 'onInput($event)'
    }
})
export class LogDirective {
    $event: any;
    onInput(event: any) {
        console.log(event.target.value);
    }
}
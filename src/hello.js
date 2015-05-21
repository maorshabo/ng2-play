import {Component, View, bootstrap, For} from 'angular2/angular2';

@Component({
    selector: 'hello'  //TODO: default to camel-cased class name if not provided?
})
@View({
    templateUrl: `helloTemplate.html`,
directives: [For]
})
export class Hello {
    items: Array<string>;
    constructor() {
        this.items = [];
    }
    addItem(item: int) {
        this.items.push(item);
    }
    doneTyping($event) {
        if($event.which === 13) {
            this.addItem($event.target.value);
            $event.target.value = null;
        }
    }
}

bootstrap(Hello);

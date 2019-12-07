// Create simple observable that emits three values
import { Observable, of } from 'rxjs';
import { Observer } from 'rxjs';

export class ObservableClass {
    public myObservable: any;
    public myObserver:any;
    public latestValue:any;
    
   
    constructor(observableArray: Array<string>) {
        this.myObservable = of(observableArray);
        this.myObserver = {
            next: x => this.latestValue =x,
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification'),
          };
    }
}


import 'mocha';
import { expect} from 'chai';

import {ObservableClass} from './observables';

 describe ('test for observable.ts',()=>{



const testObservable = new ObservableClass(["1", "2", "3"]);
testObservable.myObservable.subscribe(testObservable.myObserver);

it('should output be for one ',() => {
    expect(testObservable.latestValue[0]).equal("1");
});
it('should output be for two ',() => {
    expect(testObservable.latestValue[1]).equal("2");
});



 });

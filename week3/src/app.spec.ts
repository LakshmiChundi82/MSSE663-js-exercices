import 'mocha';
import { expect} from 'chai';

import {TeslaModels} from './app';

 describe ('test for app.ts',()=>{

const teslaModels = new TeslaModels(true,50, 25, ["2010", "2015", "2018"], true);
it('should output Tesla Model Year ',() => {
    expect(teslaModels.models[0]).equal("2010");
});

it('should output Tesla length',() =>{});
    expect(teslaModels.length).equal(50);
});



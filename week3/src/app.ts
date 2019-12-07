
export interface ITeslaModels {
    length: number;
    width: number;
    cameraViewForParking: boolean;

    getModels(models: Array<string>): Array<string>;

    hasFalconWings(isTrue: boolean): boolean;
}

export class TeslaModels implements ITeslaModels {
    cameraViewForParking: boolean;
    length: number;
    width: number;
    models: Array<string>;
    isTrue: boolean;

    constructor(cameraViewForParking: boolean,
                length: number,
                width: number,
                models: Array<string>,
                isTrue: boolean) {
        this.cameraViewForParking = cameraViewForParking;
        this.length = length;
        this.width = width;
        this.models = models;
        this.isTrue = isTrue;
    }

    getModels(): Array<string> {
        return this.models;
    }

    hasFalconWings(): boolean {
        return this.isTrue;
    }
}



class FuelFetcher {

    private static SERVER_FUEL_URL = "localhost:4000/now?format=json";

    private lastUpdate: number = 0;

    constructor() {

    }

    async update(): Promise<FuelData> {
        return new Promise<FuelData>(async resolve => {
            this.lastUpdate = Date.now();
            const data: FuelDataConstructorParam = await (await fetch(FuelFetcher.SERVER_FUEL_URL)).json();
            resolve(new FuelData(data))
        })


    }
}


enum FuelType {
    E10 = "5",
    GAZOLE = "1"
}

enum SortType {
    PRICE,
    DISTANCE,
    NAME
}

enum SortMode {
    ASC,
    DSC
}


type FuelDataConstructorParam = {
    pdv: [
        {
            '_attributes': {
                'cp': string,
                'latitude': number
                'longitude': number
            },
            'adresse': {
                '_text': string
            },
            'prix': [{
                '_attributes': {
                    'id': number
                    'nom': number
                    'valeur': number
                    'maj': string
                },
            }],
            'horaires': {
                '_attributes': {
                    'automate-24-24': "" | "1"
                },
                'jour': [{
                    "_attributes": {
                        "ferme": "" | "1",
                        "id": number,
                        "nom": 'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Samedi' | 'Dimanche'
                    },
                    "horaire": {
                        "_attributes": {
                            "fermeture": string,
                            "ouverture": string
                        }
                    }
                }],
                ville: {
                    '_text': string
                }
            }

        }
    ]
}


class FuelData {
    private _data: { raw: any };
    private _nb: number;
    private _orderBy: SortType;
    private _mode: SortMode;
    private _fuel: FuelType;

    constructor(rawData: FuelDataConstructorParam) {
        this._data = {
            raw: rawData,
        };
        this._nb = 10;
        this._orderBy = SortType.PRICE;
        this._fuel = FuelType.E10;
        this._mode = SortMode.ASC

    }


}

export {
    FuelFetcher,
    FuelData,
    SortMode,
    FuelType,
    SortType
}

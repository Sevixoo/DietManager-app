import {LocalStorage} from "./LocalStorage";

export class LocalModule {

    constructor(){}

    public provideLocalStorage() : LocalStorage {
        return new LocalStorage();
    }

}
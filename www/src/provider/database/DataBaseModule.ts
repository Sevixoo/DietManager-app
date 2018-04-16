import {ProfileDatabaseRepository} from "./ProfileDatabaseRepository";

export class DataBaseModule {

    constructor(){}

    public provideProfileDatabaseRepository() : ProfileDatabaseRepository{
        return new ProfileDatabaseRepository();
    }

}
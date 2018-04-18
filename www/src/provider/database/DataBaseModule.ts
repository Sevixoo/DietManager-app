import {ProfileDatabaseRepository} from "./ProfileDatabaseRepository";
import Database = SQLitePlugin.Database;
import {DataBaseHandler} from "./DataBaseHandler";

export class DataBaseModule {

    private readonly dataBaseHandler : DataBaseHandler;

    constructor(conn : Database){
        this.dataBaseHandler = new DataBaseHandler(conn);
    }

    public provideDataBaseHandler() : DataBaseHandler {
        return this.dataBaseHandler;
    }

    public provideProfileDatabaseRepository() : ProfileDatabaseRepository{
        return new ProfileDatabaseRepository();
    }

}
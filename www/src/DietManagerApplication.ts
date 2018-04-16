import {Application} from "../libs/framework/Application";
import {ProfileRepository} from "./main/profile/ProfileRepository";
import {DataBaseModule} from "./provider/database/DataBaseModule";
import {LocalModule} from "./provider/local/LocalModule";
import {AccountModule} from "./provider/account/AccountModule";
import {AccountManager} from "./provider/account/AccountManager";

export class DietManagerApplication extends Application{

    private dataBaseModule : DataBaseModule;
    private storageModule : LocalModule;
    private accountModule : AccountModule;

    public initialize() : void{
        this.dataBaseModule = new DataBaseModule();
        this.storageModule = new LocalModule();
        this.accountModule = new AccountModule();
    };

    public provideProfileRepository() : ProfileRepository{
        return new ProfileRepository(
            this.dataBaseModule.provideProfileDatabaseRepository(),
            this.storageModule.provideLocalStorage()
        );
    }

    public provideAccountManager() : AccountManager{
        return this.accountModule.provideAccountManager();
    }

}





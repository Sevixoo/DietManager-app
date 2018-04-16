import {AccountManager} from "./AccountManager";

export class AccountModule {

    constructor() { }

    public provideAccountManager() : AccountManager{
        return new AccountManager();
    }

}
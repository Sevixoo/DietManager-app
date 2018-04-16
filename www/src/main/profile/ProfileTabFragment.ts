import {Fragment} from "../../../libs/framework/Fragment";
import {ProfileRepository} from "./ProfileRepository";
import {ProfileViewModel} from "./ProfileViewModel";
import {AccountManager} from "../../provider/account/AccountManager";
import {IRepository} from "../../provider/database/IRepository";
import {Exception} from "../../common/Exception";
import * as $ from "jquery";

export class ProfileTabFragment extends Fragment{

    //injected fields should be readonly
    private readonly accountManager : AccountManager;
    private readonly repository : ProfileRepository;

    //views
    private profileNameLabel : HTMLElement;

    //use inject constructor to acquire dependencies
    constructor(view : string , repository : ProfileRepository, accountManager : AccountManager){
        super(view);
        this.repository = repository;
        this.accountManager = accountManager;
    }

    //invoked after view loaded
    public initialize(): void {
        //bind views
        this.profileNameLabel = $("#profile_name").get(0);
        //load data
        let loggedUserId = this.accountManager.getLoggedUserId();
        this.repository.load(loggedUserId, viewModel => {
            //on load data success
            this.displayProfileName(viewModel.getName());
        } , this.onException );
    }

    private displayProfileName(name : string) : void {
        this.profileNameLabel.innerHTML = ( name );
    }

    //on load data error
    private onException( name : Exception ) : void {
        console.error(name.getMessage());
    }

    
}
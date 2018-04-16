import {ProfileViewModel} from "../../main/profile/ProfileViewModel";
import {IRepository} from "./IRepository";
import {Exception} from "../../common/Exception";

export class ProfileDatabaseRepository implements IRepository<ProfileViewModel> {

    constructor(){}

    load(uniqueId: string, onSuccess: (result: ProfileViewModel) => void, onError: (error: Exception) => void): void {
        //TODO implement database
        //this is mock implementation
        let viewModel : ProfileViewModel = new ProfileViewModel();
        viewModel.setName("Jan Michael Vincent");
        onSuccess(viewModel);
    }

    save(item: ProfileViewModel, onSuccess: (result: ProfileViewModel) => void, onError: (error: Exception) => void): void {
        //TODO implement database
    }



}
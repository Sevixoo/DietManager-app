import {ProfileViewModel} from "./ProfileViewModel";
import {LocalStorage} from "../../provider/local/LocalStorage";
import {LocalRepository} from "../../provider/local/LocalRepository";
import {IRepository} from "../../provider/database/IRepository";

export class ProfileRepository extends LocalRepository<ProfileViewModel>{

    constructor(dataBaseRepository: IRepository<ProfileViewModel>, localStorage: LocalStorage) {
        super("ProfileRepository", dataBaseRepository, localStorage);
    }

}
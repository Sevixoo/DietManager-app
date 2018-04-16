import {IBasicViewModel} from "../../common/IBasicViewModel";
import {UUID} from "../../common/UUID";

/* This is view model class for profile screen. ViewModel must implement IBasicViewModel interface and provide
 * uniqueId. This class should provide data for each view on related screen.
 */
export class ProfileViewModel implements IBasicViewModel{

    private readonly uniqueId : string;

    private name : string;

    constructor(){
        this.uniqueId = UUID.generateUUID();
    }

    getUniqueId(): string {
        return this.uniqueId;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name : string) : void{
        this.name = name;
    }

}
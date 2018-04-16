import {IBasicViewModel} from "../../common/IBasicViewModel";

export interface IStorage<ITEM_TYPE extends IBasicViewModel> {

    load( uniqueId : string ) : ITEM_TYPE;

    save( item : ITEM_TYPE );

}
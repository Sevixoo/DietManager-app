import {IBasicViewModel} from "../../common/IBasicViewModel";
import {Exception} from "../../common/Exception";

export interface IRepository<ITEM_TYPE extends IBasicViewModel> {

    load( uniqueId : string , onSuccess:(result:ITEM_TYPE) => void , onError:(error:Exception) => void ) : void;

    save( item : ITEM_TYPE ,  onSuccess:(result:ITEM_TYPE) => void , onError:(error:Exception) => void ) : void;

}
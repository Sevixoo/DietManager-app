import {IRepository} from "../database/IRepository";
import {LocalStorage} from "./LocalStorage";
import {IBasicViewModel} from "../../common/IBasicViewModel";
import {Exception} from "../../common/Exception";

export class LocalRepository<ITEM_TYPE extends IBasicViewModel> implements IRepository<ITEM_TYPE>{

    private readonly dataBaseRepository : IRepository<ITEM_TYPE>;
    private readonly localStorage : LocalStorage;
    private readonly key : string;

    constructor(key: string, dataBaseRepository: IRepository<ITEM_TYPE>, localStorage: LocalStorage ) {
        this.dataBaseRepository = dataBaseRepository;
        this.localStorage = localStorage;
        this.key = key;
    }


    load(uniqueId: string, onSuccess: (result: ITEM_TYPE) => void, onError: (error: Exception) => void): void {
        let rawModel : string = this.localStorage.get(this.key);
        if(rawModel == null){
            this.dataBaseRepository.load(uniqueId,viewModel => {
                this.localStorage.put(this.key,viewModel);
                onSuccess(viewModel);
            }, onError);
        }else{
            onSuccess(JSON.parse(rawModel));
        }
    }

    save(item: ITEM_TYPE, onSuccess: (result: ITEM_TYPE) => void, onError: (error: Exception) => void): void {
        this.localStorage.put(this.key,item);
        this.dataBaseRepository.save(item,onSuccess,onError);
    }

}
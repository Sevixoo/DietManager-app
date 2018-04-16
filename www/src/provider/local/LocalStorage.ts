export class LocalStorage {

    private storage;

    constructor(){
        this.storage = window.localStorage;;
    }

    public get( key : string ) : string{
        return this.storage.getItem("key");
    }

    public put( key : string , object : object) : void {
        this.storage.setItem(key,JSON.stringify(object));
    }

}
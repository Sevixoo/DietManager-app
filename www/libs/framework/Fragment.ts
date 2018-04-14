export abstract class Fragment {

    private viewName : string;

    public constructor( view : string ){
        this.viewName = view;
    }

    public getViewName() : string{
        return this.viewName;
    }

    public abstract initialize() : void;

}
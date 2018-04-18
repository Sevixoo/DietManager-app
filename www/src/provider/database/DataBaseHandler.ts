import Database = SQLitePlugin.Database;
import Transaction = SQLitePlugin.Transaction;
import {ProfileDataSchema} from "../../entity/ProfileDataSchema";
import {dataType} from "./ormConfig";

export class DataBaseHandler {

    private readonly conn : Database;

    constructor(conn : Database){
        this.conn = conn;
        this.transaction(tx => {
           let sql = this.createTableSql(ProfileDataSchema);
            console.log("transaction");
           tx.executeSql(sql);
        },() => {
            console.log("sql OK");
        },error => {
            console.log(error);
        });
    }

    public transaction( onTransaction : (tx: Transaction) => void , onSuccess : () => void , onError : (error : string) => void  ){
        this.conn.transaction(tx => {
            onTransaction(tx);
        },err => {
            onError(err.message);
        },() => {
            onSuccess();
        });
    }

    public createTableSql( obj : object ) : string {
        let sql : string = "CREATE TABLE IF NOT EXISTS " + this.getName(obj) +" (";
        let fields : string[];
        let i : number = 0;
        for( let x in obj['fields'] ){
            let type = this.getFieldType(obj,x);
            if(type == dataType.PK){
                fields[i] = " " + x + " INTEGER PRIMARY KEY";
            }else if(type == dataType.NUMBER){
                fields[i] = " " + x + " NUMERIC";
            }else if(type == dataType.TEXT){
                fields[i] = " " + x + " TEXT";
            }else if(type == dataType.OBJECT){
                fields[i] = " " + x + " TEXT";
            }
        }
        sql += fields.join(',');
        sql += ")";
        return sql;
    }

    public getFieldType( obj : object , field : string){
        return obj['fields'][field];
    }

    public getName( obj : object ) : string{
        return obj['table'];
    }

}
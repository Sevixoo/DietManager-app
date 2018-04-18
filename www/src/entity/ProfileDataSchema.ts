import {dataType} from "../provider/database/ormConfig";

export var ProfileDataSchema = {
    table : "profile",
    fields : {
        id : dataType.PK,
        uniqueId : dataType.TEXT,
        name : dataType.TEXT,
        data : dataType.OBJECT
    }
};
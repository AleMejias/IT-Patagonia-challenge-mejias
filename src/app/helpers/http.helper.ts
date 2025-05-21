import { HttpParams } from "@angular/common/http";

const buildHttpParams = ( target: {[key: string] : string | undefined | null | number | Date} ): HttpParams => {

    let params = new HttpParams(target)
    

    for (const key in target) {

        if( target[key] !== null && target[key] !== undefined && target[key] !== '' ){
            params = params.set( key , `${target[key]}` )
        }
    }
    return params;

}



export const HTTP_HELPERS = {
    buildHttpParams
}
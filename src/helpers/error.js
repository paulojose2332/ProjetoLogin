import _ from "lodash";

export function getErrors(errors){
    const toReturn = {};
    for( const error of _.toPairs(errors)){
        toReturn[error[0]] = error[1].map(c => c).join();
    }

    return toReturn;
}
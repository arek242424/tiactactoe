
export function deepEqual(ob1, ob2){
    if(ob1 === undefined || ob2 === undefined){
        return false;
    }

    const ob1Keys = Object.keys(ob1)
    const ob2Keys = Object.keys(ob2)

    if(ob1Keys.length !== ob2Keys.length){
        return false;
    }

    for(let key of ob1Keys){
        const val1 = ob1[key];
        const val2 = ob2[key]
        if(typeof val1 === 'object' && typeof val2 === 'object'){
            if(deepEqual(val1, val2) === false){
                return false
            }
            
        }else{
            if(val1 !== val2){
                return false
            }
        }
    }

    return true;
}
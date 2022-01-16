import {deepEqual} from './objectHelper'

/** gets next element of an array. If the element is last in the array then the function returns a first element */
export function getNextArrayElement(currentElement, array=[]){

    let currentElementIndex = -1
    currentElementIndex = array.findIndex(element => deepEqual(currentElement, element))
    if(currentElementIndex === -1 || currentElementIndex === 'undefined'){
        return currentElement;
    }

    if(currentElementIndex === array.length -1){
        return array[0];
    }else{
        return array[currentElementIndex + 1]
    }
}
const serverAdress = 'http://localhost:5000/api';
const contentTypeAppJson = 'application/json';

function getFullUri(controller, method){
    return `${serverAdress}/${controller}/${method}`;
}

const postRequestTemplate = {
    method: 'POST',
    mode: 'cors',
    headers:{
        'Content-Type': contentTypeAppJson
    },
    body: ''
}

const getRequestTemplate ={
    method: 'GET',
    mode: 'cors',
    headers:{
        'Content-Type': contentTypeAppJson
    },
}

export async function makePostRequest(controller, method, body={}){
    return await fetch(getFullUri(controller, method), {...postRequestTemplate, body: JSON.stringify(body)});
}

export async function makeGetRequest(controller, method){
    return await fetch(getFullUri(controller, method), getRequestTemplate);
}




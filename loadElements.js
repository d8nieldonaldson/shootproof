'use strict';

const loaderPromise = new Promise( (resolve, reject) => {
    resolve ? resolve('success') : reject('error');
})

function loadParents(){
    const message = console.log('parents loaded');
    topLevelElements.forEach( (item) =>{
        componentInsertionPoint.appendChild(buildList(item));
    });
    return Promise.resolve(message);
}

function loadChildren(){
    const message = console.log('children loaded');
    nestedElements.forEach( item => {
        document.getElementById(item.parent).appendChild(buildList(item));
    });
    return Promise.resolve(message);
}

const runLoaderPromise = function(){
    loaderPromise
        .then(loadParents)
        .then(loadChildren)
        .catch( () => console.log('error'));
}

runLoaderPromise();
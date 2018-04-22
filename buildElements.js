function buildList(element){
    const nodeList = document.createElement('ul');
    nodeList.appendChild(buildListItem(element));
    if(element.isChild){
        nodeList.classList.add('nested-list');
        nodeList.hidden = true;
    }
    if(element.isParent){
        nodeList.classList.add('parent-list');
    }
    return nodeList;

}


function buildListItem(element){
    const nodeListItem = document.createElement('li'); 
    nodeListItem.id = element.id;   
    nodeListItem.appendChild(buildNodeContent(element));

    return nodeListItem;
}

function buildNodeContent(element){
    const nodeContentContainer = document.createElement('div');
    const nameContainer = document.createElement('p');
    const name = document.createTextNode(element.name);
    
    nameContainer.classList.add('node-name');
    nameContainer.appendChild(name);
    nodeContentContainer.classList.add('node-content-container');
    nodeContentContainer.appendChild(buildThumbnail(element));
    nodeContentContainer.appendChild(nameContainer);
    if(element.isParent){
        nodeContentContainer.appendChild(buildCarat(element));
        nodeContentContainer.classList.add('trigger');
    }
    
    return nodeContentContainer;
}


function buildThumbnail(element){
    const thumbnail = document.createElement('img');
    
    thumbnail.src = element.thumbnail.href;
    thumbnail.alt = element.thumbnail.description;
    thumbnail.classList.add('thumbnail');
    
    return thumbnail;
}

function buildCarat(element){
    const carat = document.createElement('img');

    carat.src = 'img/carat_up_2x.png';
    carat.alt = 'reveal/conceal additonal content';
    carat.classList.add('carat');
    carat.classList.add('closed');

    return carat;
}
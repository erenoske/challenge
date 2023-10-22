function createItemAfter(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    li.className = 'item';
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(' x'));   

    li.appendChild(span);

    document.querySelector('ul').appendChild(li);
}

function createItemBefore(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    li.className = 'item';
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(' x'));   

    li.appendChild(span);

    const firstItem = document.querySelector('ul li:first-child');


    document.querySelector('ul').insertBefore(li, firstItem);
}

createItemAfter('item 4');
createItemBefore('item 5');

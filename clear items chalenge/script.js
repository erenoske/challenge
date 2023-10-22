const items = document.querySelectorAll('.items');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  items.forEach((item, index) => {
    if(!(index === 2)) {
      item.remove();
    } 
  });
});

// second way
// const itemList = document.querySelector('.item-list');
// const button = document.querySelector('button');
// 
// button.addEventListener('click', () => {
//    while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//    }
// });


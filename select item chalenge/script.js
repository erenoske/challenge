const items = document.querySelectorAll('.items');

items.forEach((item, index) => {
  item.style.color = 'red';
  if (index === 2) {
    item.classList.add('selected');
    item.style.color = 'green';
  }
});
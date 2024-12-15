var liItems = document.querySelectorAll('ul#categories>li.item');
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((liItem) => {
  var header = liItem.querySelector('h2');
  console.log(`Category: ${header.textContent}`);
  var innerItems = liItem.querySelectorAll('li');
  console.log(`Elements: ${innerItems.length}`);
});

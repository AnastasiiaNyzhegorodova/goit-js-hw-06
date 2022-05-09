const listWithClass = document.querySelectorAll(".item");
const countedLists = listWithClass.length;
console.log(`Number of categories: ${countedLists}`);

const lists = document.querySelectorAll("#categories>li");
// console.log(lists);
// console.log(lists);

lists.forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
});

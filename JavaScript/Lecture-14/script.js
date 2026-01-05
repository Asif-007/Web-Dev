const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming";
newElement.id = "second";

const element = document.getElementById("first");
element.before(newElement);
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali aa rahi hai";
newElement2.id = "third";
newElement2.className = "diwali";
newElement2.className += " holi";

newElement2.classList.add("diwali");
newElement2.classList.add("holi");

newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "30px";
newElement2.setAttribute("hello", "ji");

element.before(newElement2);

// console.log(newElement2.getAttribute('hello'));

// const list = document.createElement("li");
// list.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Cake";

// const list3 = document.createElement("li");
// list3.textContent = "Halwa";

// const unorderElement = document.getElementById("listing");
// unorderElement.append(list);

// unorderElement.append(list2);

// unorderElement.prepend(list3);

// const list4 = document.createElement("li");
// list4.textContent = "Paneer";
// unorderElement.children[1].after(list4);

const arr = ["Milk", "Halwa", "Paneer", "Tofu", "Tea"];
const unorderElement = document.getElementById("listing");

const fragment = document.createDocumentFragment();
// const fragment = [];

for (let i of arr) {
  const addElement = document.createElement("li");
  addElement.textContent = i;
  fragment.append(addElement);
}

unorderElement.append(fragment);


const s1 = document.getElementById("first");
s1.remove();
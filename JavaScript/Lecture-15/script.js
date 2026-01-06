// function handleClick() {
//     const temp = document.getElementById("first");
//     temp.textContent = "Strike is Coming";
// }

// const element = document.getElementById("first");
// element.onclick = function () {
//     element.textContent = "Strike is Coming";
//     element.style.backgroundColor = "pink";
// };

// element.onclick = function () {
// //   element.textContent = "Strike is Coming";
//   element.style.backgroundColor = "purple";
// };

// element.addEventListener('', () => {
//     element.textContent = "Strike is coming";
// })

// element.addEventListener('click', () => {
//     element.style.backgroundColor = "purple"
// })

// const child1 = document.getElementById("child1");

// child1.addEventListener('click', () => {
//    child1.textContent ="I am Clicked"
// })

// const parent = document.getElementById("parent");    
// console.log(parent.children);

// parent.addEventListener('click', (e) => {
//     // console.log(e.target);
//     e.target.textContent = 'I am clicked'
// });

// function handleclick(e) {
//   e.target.textContent = "I am clicked";
//   parent.removeEventListener("click", handleclick);
// }

// parent.addEventListener("click", handleclick);

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click', (e)=> {
//     // console.log("grandparent clicked",e);
//     console.log(e.target);
// })

// const parent = document.getElementById("parent");
// parent.addEventListener("click", (e) => {
//     //   console.log("parent clicked");
//     console.log(e);
// });

// const child = document.getElementById("child");
// child.addEventListener("click", (e) => {
//     console.log(e)
//     e.stopPropagation();
// });

// captue phase on hai: top se fown aaoge us time pe event ko trigger kar diya jaega
// capture phase off hai: event hai usko down to up (bubbling phase bolte hai tab trigger hote hai)

// // Grabs the first P tag.
// const para = document.querySelector("p");
// console.log(para);

// // Grabs all the P tags
// const paras = document.querySelectorAll("p");
// console.log(paras);
// console.log(paras[2]);

// paras.forEach(para => {
//   console.log(para);
// });
// //we get a Nodelist, it's like array but we can't use array methods on it.

// // Grabs the elements by its id
// const title = document.getElementById('page-title');
// console.log(title);

// // Grabs the elements by its id
// const title2 = document.getElementsByTagName("h1");
// console.log(title2);

// // Grabs the elements by its class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);

// // innerText

// para.innerText += "I'm really sorry!";

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += "new text";
// });

// // innerHTML

// title.innerHTML += "<h1>LESSON</h1>";
// const people = ['John', 'Gigi', 'Alex'];

// people.forEach(person => {
//   para.innerHTML += `<p>${person}</p>`;
// });

// // Get attribute and Set attribute

// link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.google.com');
// console.log(link.getAttribute('href'));

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','first-P')
// console.log(msg.getAttribute('class'));
// msg.setAttribute('style', 'color: green');

// // Change css style

// const footer = document.querySelector(".footer");
// footer.style.color = "orange";
// footer.style.border = "1px solid black"
// footer.style.padding = "4px";

// // Add and remove classList

// const content = document.querySelector('h5');
// console.log(content.classList);
// content.classList.add('success');
// content.classList.remove('success');
// content.classList.add('error');
// content.classList.remove('error');

// const pTag = document.querySelectorAll('p');
// pTag.forEach(pa => {
//   if(pa.textContent.includes('error')){
//     pa.classList.add('error');
//   } else if(pa.textContent.includes('success')) {
//     pa.classList.add('success');
//   }
// });

// //toggle clssList

// content.classList.toggle('success');
// content.classList.toggle('success');

// Parents / Children realtionship

// const article = document.querySelector('article');
// console.log(article.children);
// //create an array form HTML collection
// // console.log(Array.from(article.children));

// // Loop through the array that is formed from HTMLcollection
// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });

// const title = document.querySelector('h2');
// console.log(title.parentElement);
// console.log(title.nextElementSibling);
// console.log(title
//   .previousElementSibling);

// Event Listener 

const ul = document.querySelector('ul');
const button = document.querySelector('button');
// const items = document.querySelectorAll('li');
// items.forEach(item => {
//   item.addEventListener('click', (e) => {
//     // e.target.style.textDecoration = "line-through";
//     console.log("event in li");
//     e.target.remove();
//   })
// });

// button.addEventListener('click', () => {
//   // ul.innerHTML += "<li>something new</li>"
//   const li = document.createElement('li');
//   li.textContent = "something new";
//   // ul.appendChild(li);
//   ul.prepend(li);
// });

// // Event Bubbling

// // ul.addEventListener('click', e => {
// //   console.log("event in ul");
// // });
// // Event Delegation

// ul.addEventListener('click', e => {
//   if(e.target.tagName === 'LI') {
//     e.target.remove();
//   }
// });

//Popup

const buttonClickMe = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

buttonClickMe.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', () => {
  popup.style.display = 'none';
});

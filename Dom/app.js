// Grabs the first P tag.
const para = document.querySelector("p");
console.log(para);

// Grabs all the P tags
const paras = document.querySelectorAll("p");
console.log(paras);
console.log(paras[2]);

paras.forEach(para => {
  console.log(para);
});
//we get a Nodelist, it's like array but we can't use array methods on it.

// Grabs the elements by its id
const title = document.getElementById('page-title');
console.log(title);

// Grabs the elements by its id
const title2 = document.getElementsByTagName("h1");
console.log(title2);

// Grabs the elements by its class name
const errors = document.getElementsByClassName("error");
console.log(errors);

// innerText

para.innerText += "I'm really sorry!";

paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += "new text";
});

// innerHTML

title.innerHTML += "<h1>LESSON</h1>";
const people = ['John', 'Gigi', 'Alex'];

people.forEach(person => {
  para.innerHTML += `<p>${person}</p>`;
});

// Get attribute and Set attribute

link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.google.com');
console.log(link.getAttribute('href'));

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class','first-P')
console.log(msg.getAttribute('class'));
msg.setAttribute('style', 'color: green');

// Change css style

const footer = document.querySelector(".footer");
footer.style.color = "orange";
footer.style.border = "1px solid black"
footer.style.padding = "4px";

// Add and remove classList

const content = document.querySelector('h5');
console.log(content.classList);
content.classList.add('success');
content.classList.remove('success');
content.classList.add('error');
content.classList.remove('error');

//toggle clssList

let keyword = document.querySelector('.keyword');
window.addEventListener('load', event => {
  let paragraph = document.createElement('p')
  let div = document.createElement('div');
  let scButton = document.createElement('button');
  scButton.classList.add("scope");

  paragraph.innerHTML = 'Let and Const';
  div.innerHTML = `let x = 1;<br>
                  &nbsp if(x === 1) {<br>
                    &nbsp &nbsp let x = 2;<br>
                    &nbsp &nbsp console.log(x); //output 2<br>
  }<br>
  console.log(x); //output 1`;
  scButton.innerHTML = 'Show scope';

  keyword.append(paragraph);
  keyword.append(div);
  keyword.append(scButton);
});
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('scope')) {
    let x = 1;
    if (x === 1) {
      let x = 2;
      console.log(x); //output 2
    }
    console.log(x); //output 1
  }
});






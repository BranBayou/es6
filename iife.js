//IIFE

(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.querySelector('body').addEventListener('click', function(e) {
    console.log(e.target.innerHTML, 'clicked');
    header.style.color = 'blue';
  });
})();
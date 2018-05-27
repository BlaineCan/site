let drop = document.querySelector('.drop');
let left = document.querySelector('.left');

function line(){
  drop.addEventListener('click', function(){
    left.setAttribute('class', 'hidden');
  });
}

line();

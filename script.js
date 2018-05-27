
(function line(){
  let drop = document.querySelector('.drop');
  drop.addEventListener('click', function(){
    let left = document.querySelector('.left');
    let friendform = document.querySelector('.friendform');
    left.className += ' hidden';
    friendform.className += 'friendform';
  });
})();

(function site(){
    this.init = function (){
        this.showfriend();
        this.goback();
    }
    this.showfriend = function(){
        let drop = document.querySelector('.drop');
        drop.addEventListener('click', function(){
            let left = document.querySelector('.left');
            let friendform = document.querySelector('.friendform');
            left.className += ' hidden';
            friendform.className += 'friendform';
        });
    }
    this.goback = function(){
        let backbutton = document.querySelector('.backbutton');
        backbutton.addEventListener('click', function(){
            let left = document.querySelector('.left');
            let friendform = document.querySelector('.friendform');
            left.className += 'left';
            friendform.className += ' hidden';
        });
    }
    
    this.init();
})(); 
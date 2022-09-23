// document.querySelector("button").addEventListener("click", handleclick);


function handleclick(key){
    // console.log(this.innerHTML);  //this gives us the clicked or target element
    switch(key){
        case "w":
            var audio  = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio  = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio  = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio  = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio  = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "k":
            var audio  = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio  = new Audio("sounds/snare.mp3");
            audio.play();
        break

        default:

    }

}

addEventListener('keydown', function(e){
    handleclick(e.key)
    button_animation(e.key);
});

let btns = document.querySelectorAll(".drum").length;
for(let i=0; i<btns; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        handleclick(key);
        button_animation(key);
    }); 
}


function button_animation(key){
    var btn = document.querySelector('.'+key)
    btn.classList.add('pressed');

    setTimeout(function(){
        btn.classList.remove('pressed');
    }, 100);
}



var numberOfKeys = document.querySelectorAll(".drum").length;

for(var i=0; i< numberOfKeys;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
         var innerHtmlButton = this.innerHTML;
         makeSound(innerHtmlButton);
         
    })
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
            case "s":
                var audio1 = new Audio("sounds/snare.mp3");
                audio1.play();
            break;

            case "d":
                var audio2 = new Audio("sounds/tom-1.mp3");
                audio2.play();
            break;

            case "j":
                var audio3 = new Audio("sounds/tom-2.mp3");
                audio3.play();
            break;

            case "k":
                var audio4 = new Audio("sounds/tom-3.mp3");
                audio4.play();
            break;

            case "l":
                var audio5 = new Audio("sounds/tom-4.mp3");
                audio5.play();
            break;

            default: 
                alert("Press only the given buttons")
     }

}
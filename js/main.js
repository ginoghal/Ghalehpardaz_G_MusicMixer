console.log('fired!');

 icon_holder = document.querySelectorAll('icon_holder');
 drag_Box = document.querySelectorAll('#drag_Box');
 dropZones = document.querySelectorAll('play_board');

 function allowDrop(ev){
   ev.preventDefault();
 }

 function drag(ev){
   ev.dataTransfer.setData("icon",ev.target.id);
 }

 function drop(ev){
   ev.preventDefault();
   var data = ev.dataTransfer.getData("icon");
   ev.target.appendChild(document.getElementById(data));

//var audio = new Audio('audio/mixerBeat1.mp3'); audio.play();

myAudio = new Audio('audio/mixerBeat1.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, true);
myAudio.play();

myAudio = new Audio('audio/mixerBeat2.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, true);
myAudio.play();


 dropZones.forEach(zone => {
 zone.addEventListener("drag_Box", function(e) {
 e.preventDefault();
 console.log('dragged over')

 //if (this.childElementCount > 0) {return;}
 if(zone.childElementCount == 0) {

   zone.classList.remove();
   zone.classList.add("drag_Box");

   e.target.appendChild(document.querySelector(`#${draggedElement}`));
 }
 console.log('One Item Only');
});


 zone.addEventListener("drop", function(e){
 e.preventDefault(); // dont do your default behaviour instead do the following (console log)
 console.log('you dropped something over me')
 if (this.childElementCount > 0) {return; }
 console.log('one child family, go away!');



});
});
 }

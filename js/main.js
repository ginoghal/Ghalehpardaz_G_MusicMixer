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




var audio = new Audio('EYE.mp3'); audio.play();

 dropZones.forEach(zone => {
 zone.addEventListener("drag_Box", function(e) {
 e.preventDefault();
 console.log('dragged over')

 if (this.childElementCount > 2) {return;}
 console.log('One Item Only');
});


 zone.addEventListener("drop", function(e){
 e.preventDefault(); // dont do your default behaviour instead do the following (console log)
 console.log('you dropped something over me')
 if (this.childElementCount > 1) {return; }
 console.log('one child family, go away!');



});
});
 }

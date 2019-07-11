console.log('fired!');


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



 dropZones.forEach(zone => {
 zone.addEventListener("play_board", function(e) {
 e.preventDefault();
 console.log('dragged something over me');

 if (this.childElementCount == 1) {return; }
 console.log('one child family, go away!');
});


 zone.addEventListener("drop", function(e){
 e.preventDefault(); // dont do your default behaviour instead do the following (console log)
 console.log('you dropped something over me');

 if (this.childElementCount == 1) {return; }
 console.log('one child family, go away!');



});
});
 }

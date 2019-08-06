(() =>{

console.log('fired!');

 icon_holder = document.querySelectorAll('icon_holder');
 drag_Box = document.querySelectorAll('#drag_Box');
 dropZones = document.querySelectorAll('.drag_Box');

 function allowDrop(ev){
   ev.preventDefault();
 }

 function drag(ev){
   ev.dataTransfer.setData("img",ev.target.id);
 }


 document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

 function drop(ev){
   ev.preventDefault();
   ev.target.appendChild(document.getElementById(data));
 }

//var audio = new Audio('audio/mixerBeat1.mp3'); audio.play();

 dropZones.forEach(zone => {
 zone.addEventListener("dragover", function(ev){
 ev.preventDefault();
 });
 zone.addEventListener("drop", function(ev) {


 ev.preventDefault(); // dont do your default behaviour instead do the following (console log)
 console.log('you dropped something over me');

 if (this.childElementCount > 0) {
   console.log('one child family, go away!');
   return;
}

 myAudio = new Audio('audio/mixerBeat1.mp3');
 myAudio = new Audio('audio/mixerBeat2.mp3');

 myAudio.loop = "true"; document.body.appendChild(myAudio);
 myAudio.play();
 let data = ev.dataTransfer.getData("img");


 ev.target.appendChild(document.querySelector(`#${data}`));
 })

});

})();




//debugger
